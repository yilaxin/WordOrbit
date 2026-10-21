[CmdletBinding()]
param([switch]$Publish)

# Packaging is local by default. -Publish is the explicit network-write gate.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    $remote = [string](& git remote get-url origin)
    if ($LASTEXITCODE -ne 0 -or $remote.Trim() -notin @('https://github.com/yilaxin/WordOrbit.git','https://github.com/yilaxin/WordOrbit')) { throw 'Unexpected origin; this script only publishes yilaxin/WordOrbit.' }
    if (@(& git status --porcelain).Count) { throw 'Commit the tested task changes before packaging; the working tree must be clean.' }
    $commit = ([string](& git rev-parse HEAD)).Trim()
    if ($commit -notmatch '^[0-9a-f]{40}$') { throw 'A concrete commit SHA is required.' }
    $project = Join-Path $root 'src\VocabDesk\VocabDesk.csproj'
    $version = [string]([xml](Get-Content -LiteralPath $project -Raw)).Project.PropertyGroup.Version
    if ($version -notmatch '^\d+\.\d+\.\d+$') { throw 'Invalid project version.' }
    $tag = "v$version"
    $folderName = "WordOrbit-win-arm64-v$version"
    $build = Join-Path $root "artifacts\$folderName"
    $exe = Join-Path $build 'VocabDesk.exe'
    $notesFile = Join-Path $root "RELEASE_NOTES_v$version.md"
    if (-not (Test-Path -LiteralPath $exe) -or -not (Test-Path -LiteralPath $notesFile)) { throw 'Build output or release notes are missing.' }
    if ((Get-Item -LiteralPath $exe).VersionInfo.ProductVersion -ne "$version+$commit") { throw 'Rebuild after committing so binary provenance matches the release commit.' }
    $sourceSite = Join-Path $root 'src\VocabDesk\Website'
    foreach ($file in Get-ChildItem -LiteralPath $sourceSite -Recurse -File) {
        $published = Join-Path (Join-Path $build 'Website') ([IO.Path]::GetRelativePath($sourceSite,$file.FullName))
        if (-not (Test-Path -LiteralPath $published) -or (Get-FileHash -LiteralPath $file.FullName).Hash -ne (Get-FileHash -LiteralPath $published).Hash) { throw "Stale build asset: $($file.Name)" }
    }
    $files = @(Get-ChildItem -LiteralPath $build -Recurse -File)
    if (@($files | Where-Object { $_.FullName -match '(?i)\\(WebView2|Backups|\.git|\.build|nebula-private[^\\]*|nebula-data)\\|\\\.env$|self-test-.*\.json$|wordorbit-nebula-backup[^\\]*\.json$' }).Count) { throw 'The build contains private/test data; refusing to package it.' }
    $zipName = "WordOrbit-v$version-win-arm64.zip"
    $zip = Join-Path (Join-Path $root 'artifacts') $zipName
    if (-not (Test-Path -LiteralPath $zip)) { Compress-Archive -LiteralPath $build -DestinationPath $zip -CompressionLevel Optimal }
    # Check every entry, including when resuming a previously interrupted upload.
    $archive = [IO.Compression.ZipFile]::OpenRead($zip)
    try {
        $entries = @{}
        foreach ($entry in $archive.Entries) { if ($entry.FullName -notmatch '[/\\]$') { $entries[$entry.FullName.Replace('\','/')] = $entry } }
        if ($entries.Count -ne $files.Count) { throw 'ZIP file count differs from the verified build.' }
        foreach ($file in $files) {
            $name = "$folderName/" + [IO.Path]::GetRelativePath($build,$file.FullName).Replace('\','/')
            $entry = $entries[$name]
            if (-not $entry -or $entry.Length -ne $file.Length) { throw "ZIP entry mismatch: $name" }
            $stream = $entry.Open(); $hasher = [Security.Cryptography.SHA256]::Create()
            try { $entryHash = [Convert]::ToHexString($hasher.ComputeHash($stream)) } finally { $stream.Dispose(); $hasher.Dispose() }
            if ($entryHash -ne (Get-FileHash -LiteralPath $file.FullName).Hash) { throw "ZIP content mismatch: $name" }
        }
    } finally { $archive.Dispose() }
    $zipHash = (Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash.ToLowerInvariant()
    [IO.File]::WriteAllText(($zip + '.sha256'), "$zipHash  $zipName`n", [Text.UTF8Encoding]::new($false))
    if (-not $Publish) { [pscustomobject]@{ mode='local-only'; tag=$tag; commit=$commit; zip=$zip; sha256=$zipHash; checkedFiles=$files.Count } | ConvertTo-Json; return }

    $env:GIT_TERMINAL_PROMPT='0'; $env:GCM_INTERACTIVE='never'
    $credentialLines = "protocol=https`nhost=github.com`n`n" | git credential fill
    $passwordLine = @($credentialLines | Where-Object { $_ -like 'password=*' } | Select-Object -First 1)
    if (-not $passwordLine) { throw 'No GitHub credential available.' }
    $token = $passwordLine[0].Substring(9)
    $headers = @{Authorization="Bearer $token"; 'User-Agent'='WordOrbit-publisher'; Accept='application/vnd.github+json'; 'X-GitHub-Api-Version'='2022-11-28'}
    $base = 'https://api.github.com/repos/yilaxin/WordOrbit'
    function Invoke-Hub([string]$Path, [string]$Method='Get', [object]$Payload=$null) {
        $request = @{Uri=($base+$Path); Method=$Method; Headers=$headers; HttpVersion='1.1'; TimeoutSec=30}
        if ($null -ne $Payload) { $request.ContentType='application/json; charset=utf-8'; $request.Body=[Text.Encoding]::UTF8.GetBytes(($Payload | ConvertTo-Json -Depth 6)) }
        for ($attempt=0; $attempt -lt 3; $attempt++) {
            try { return Invoke-RestMethod @request } catch { if ($Method -ne 'Get' -or $attempt -eq 2) { throw }; Start-Sleep -Seconds 1 }
        }
    }
    $branch = Invoke-Hub '/git/ref/heads/main'
    $tagRef = Invoke-Hub "/git/ref/tags/$tag"
    if ($branch.object.sha -ne $commit -or $tagRef.object.sha -ne $commit) { throw 'Push the exact commit and lightweight version tag before publishing.' }
    function Find-Release { @(Invoke-Hub '/releases?per_page=100') | Where-Object { $_.tag_name -eq $tag } }
    $release = Find-Release
    if (@($release).Count -gt 1) { throw 'Ambiguous release target.' }
    if (-not $release) {
        $payload = @{tag_name=$tag; target_commitish=$commit; name="词轨 WordOrbit $tag"; body=(Get-Content -LiteralPath $notesFile -Raw); draft=$true; prerelease=$false}
        try { $release = Invoke-Hub '/releases' 'Post' $payload }
        catch { $release = Find-Release; if (-not $release) { throw } }
    }
    if ($release.target_commitish -ne $commit) { throw 'Existing release targets another commit; refusing to overwrite it.' }
    foreach ($assetFile in @($zip,($zip + '.sha256'))) {
        $name = [IO.Path]::GetFileName($assetFile)
        $digest = 'sha256:' + (Get-FileHash -LiteralPath $assetFile -Algorithm SHA256).Hash.ToLowerInvariant()
        $release = Invoke-Hub "/releases/$($release.id)"
        $existing = @($release.assets | Where-Object { $_.name -eq $name })
        if ($existing.Count) {
            if ($existing.Count -ne 1 -or $existing[0].state -ne 'uploaded' -or $existing[0].digest -ne $digest) { throw "Existing asset is different; not replacing it: $name" }
            continue
        }
        if (-not $release.draft) { throw 'Public release is missing an asset; refusing to mutate it automatically.' }
        $client = [Net.Http.HttpClient]::new(); $stream = [IO.File]::OpenRead($assetFile)
        try {
            $client.Timeout=[TimeSpan]::FromMinutes(20)
            $client.DefaultRequestHeaders.Authorization=[Net.Http.Headers.AuthenticationHeaderValue]::new('Bearer',$token)
            $client.DefaultRequestHeaders.UserAgent.ParseAdd('WordOrbit-publisher')
            $content=[Net.Http.StreamContent]::new($stream)
            $content.Headers.ContentType=[Net.Http.Headers.MediaTypeHeaderValue]::Parse($(if($name.EndsWith('.zip')){'application/zip'}else{'text/plain'}))
            $url="https://uploads.github.com/repos/yilaxin/WordOrbit/releases/$($release.id)/assets?name=$([Uri]::EscapeDataString($name))"
            try {
                $response=$client.PostAsync($url,$content).GetAwaiter().GetResult()
                try { if (-not $response.IsSuccessStatusCode) { throw "Asset upload failed: HTTP $([int]$response.StatusCode)" } } finally { $response.Dispose() }
            } catch {
                # A transport failure may occur after the server received the asset.
                $observed=Invoke-Hub "/releases/$($release.id)"
                if (-not @($observed.assets | Where-Object { $_.name -eq $name -and $_.state -eq 'uploaded' -and $_.digest -eq $digest }).Count) { throw }
            }
        } finally { $stream.Dispose(); $client.Dispose() }
    }
    $release = Invoke-Hub "/releases/$($release.id)"
    foreach ($assetFile in @($zip,($zip + '.sha256'))) {
        $digest='sha256:'+(Get-FileHash -LiteralPath $assetFile).Hash.ToLowerInvariant()
        if (-not @($release.assets | Where-Object { $_.name -eq [IO.Path]::GetFileName($assetFile) -and $_.state -eq 'uploaded' -and $_.digest -eq $digest }).Count) { throw 'Remote asset digest verification failed.' }
    }
    if ($release.draft) {
        try { $release=Invoke-Hub "/releases/$($release.id)" 'Patch' @{draft=$false;make_latest='true'} }
        catch { $release=Invoke-Hub "/releases/$($release.id)"; if ($release.draft) { throw } }
    }
    $latest=Invoke-Hub '/releases/latest'
    if ($release.draft -or $latest.tag_name -ne $tag) { throw 'Release has not been confirmed as the latest public version.' }
    [pscustomobject]@{published=$true;tag=$tag;commit=$commit;release=$release.html_url;sha256=$zipHash;checkedFiles=$files.Count;assets=@($release.assets | Select-Object name,state,size,browser_download_url,digest)} | ConvertTo-Json -Depth 5
} finally {
    $headers=$null; $token=$null; $credentialLines=$null; $passwordLine=$null
    Pop-Location
}
