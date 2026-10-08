$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$site = Join-Path $projectRoot 'src\VocabDesk\Website'
$indexPath = Join-Path $site 'index.html'
$html = [IO.File]::ReadAllText($indexPath)
$html = $html.Replace('<title>词汇真经 · 离线背词</title>', '<title>词轨 WordOrbit · 离线背词</title>')
$html = $html.Replace('content="雅思词汇真经离线背词工具"', 'content="词轨 WordOrbit · 离线英语词汇学习"')
$oldBrand = '<div class="brand-mark">V</div>'
$newBrand = '<img class="wordorbit-mark" src="wordorbit-earth-mark.png" width="52" height="52" alt="" />'
$html = $html.Replace($oldBrand, $newBrand)
$html = $html.Replace('<div><strong>词汇真经</strong><span>VOCABULARY FOR IELTS · OFFLINE</span></div>', '<div class="wordorbit-wordmark"><strong>WordOrbit</strong><span>词轨 · 离线英语学习</span></div>')
if (-not $html.Contains('href="wordorbit-brand.css"')) {
    $html = $html.Replace('</head>', '  <link rel="stylesheet" href="wordorbit-brand.css" />' + "`n" + '  <link rel="icon" href="wordorbit-mark.png" type="image/png" />' + "`n</head>")
}
$html = $html.Replace('wordorbit-mark.png', 'wordorbit-earth-mark.png')
[IO.File]::WriteAllText($indexPath, $html, [Text.UTF8Encoding]::new($false))
$manifestPath = Join-Path $site 'manifest.json'
$manifest = [IO.File]::ReadAllText($manifestPath) | ConvertFrom-Json
$manifest.name = '词轨 WordOrbit · 离线背词'
$manifest.short_name = '词轨'
$manifest.description = '词轨 WordOrbit · 离线英语词汇学习'
$manifest.icons = @(@{src='wordorbit-earth-mark.png'; sizes='any'; type='image/png'; purpose='any'})
[IO.File]::WriteAllText($manifestPath, ($manifest | ConvertTo-Json -Depth 6), [Text.UTF8Encoding]::new($false))
