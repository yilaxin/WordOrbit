param([switch]$SyncLegacyWebsite)
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceSite = Join-Path ([Environment]::GetFolderPath('DesktopDirectory')) '雅思词汇离线站'
$websiteFolder = Join-Path $projectRoot 'src\VocabDesk\Website'
$releaseFolder = Join-Path $projectRoot 'artifacts\WordOrbit-win-arm64-v1.1.1'
if ($SyncLegacyWebsite) {
$required = @('index.html','styles.css','dark-overrides.css','answer-details.css','data-controls.css','app.js','quality-overrides.js','full-ocr-data.js','external-dictionary.js','example-sentences.js','icon.svg','manifest.json','service-worker.js','README.md')
foreach ($name in $required) {
    $source = Join-Path $sourceSite $name
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { throw "旧网页缺少文件：$source" }
}
New-Item -ItemType Directory -Path $websiteFolder -Force | Out-Null
foreach ($name in $required) {
    Copy-Item -LiteralPath (Join-Path $sourceSite $name) -Destination (Join-Path $websiteFolder $name) -Force
}
# The desktop shell already serves all assets locally. Do not register the site's PWA worker
# under WebView2's virtual host, because that mapping isn't consistently available to workers.
$appScript = Join-Path $websiteFolder 'app.js'
$scriptText = [IO.File]::ReadAllText($appScript, [Text.Encoding]::UTF8)
$registration = "if('serviceWorker'in navigator&&location.protocol!=='file:')"
$desktopRegistration = "if('serviceWorker'in navigator&&location.protocol!=='file:'&&!new URLSearchParams(location.search).has('desktop'))"
if (-not $scriptText.Contains($registration)) { throw '未找到网站服务工作线程的注册代码，请检查网站更新后再发布。' }
[IO.File]::WriteAllText($appScript, $scriptText.Replace($registration, $desktopRegistration), (New-Object Text.UTF8Encoding $false))

# Add the small desktop tools menu to the site's own header, without changing the browser version.
$indexPath = Join-Path $websiteFolder 'index.html'
$indexText = [IO.File]::ReadAllText($indexPath, [Text.Encoding]::UTF8)
$styleAnchor = '<link rel="stylesheet" href="data-controls.css" />'
$scriptAnchor = '<script src="quality-overrides.js"></script>'
if (-not $indexText.Contains($styleAnchor) -or -not $indexText.Contains($scriptAnchor)) {
    throw '网站入口结构已变化，无法安全加入桌面工具菜单。'
}
$indexText = $indexText.Replace($styleAnchor, $styleAnchor + "`n  " + '<link rel="stylesheet" href="desktop-controls.css" />')
$indexText = $indexText.Replace($scriptAnchor, $scriptAnchor + "`n  " + '<script src="desktop-controls.js"></script>')
[IO.File]::WriteAllText($indexPath, $indexText, (New-Object Text.UTF8Encoding $false))
}

& (Join-Path $PSScriptRoot 'Apply-WordOrbitBrand.ps1')
& (Join-Path $PSScriptRoot 'Build-WordOrbitIcon.ps1')

$project = Join-Path $projectRoot 'src\VocabDesk\VocabDesk.csproj'
$env:DOTNET_CLI_HOME = Join-Path $projectRoot '.build\dotnet-home'
$env:NUGET_PACKAGES = Join-Path $projectRoot '.build\packages'
$env:DOTNET_CLI_TELEMETRY_OPTOUT = '1'
$env:DOTNET_SKIP_FIRST_TIME_EXPERIENCE = '1'
$env:DOTNET_NOLOGO = '1'
$env:MSBUILDDISABLENODEREUSE = '1'
dotnet publish $project -c Release -r win-arm64 --self-contained true -o $releaseFolder --nologo
if ($LASTEXITCODE -ne 0) { throw '桌面版发布失败。' }
Copy-Item -LiteralPath (Join-Path $projectRoot 'INSTALL.md') -Destination (Join-Path $releaseFolder 'INSTALL.md') -Force
Copy-Item -LiteralPath (Join-Path $projectRoot 'THIRD_PARTY_NOTICES.md') -Destination (Join-Path $releaseFolder 'THIRD_PARTY_NOTICES.md') -Force
Write-Host "发布完成：$(Join-Path $releaseFolder 'VocabDesk.exe')"
