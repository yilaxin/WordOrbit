$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$releaseFolder = Join-Path $projectRoot 'artifacts\WordOrbit-win-arm64-v1.1.1'
$exe = Join-Path $releaseFolder 'VocabDesk.exe'
$icon = Join-Path $releaseFolder 'Assets\wordorbit-earth.ico'
$desktopFolder = [Environment]::GetFolderPath('DesktopDirectory')
$shortcutPath = Join-Path $desktopFolder '词轨 WordOrbit.lnk'
$oldShortcutPath = Join-Path $desktopFolder '词汇真经.lnk'
$allowedTargets = @($exe, (Join-Path $projectRoot 'artifacts\WordOrbit-win-arm64-v1.1.0\VocabDesk.exe'), (Join-Path $projectRoot 'artifacts\VocabDesk-win-arm64\VocabDesk.exe'), (Join-Path $projectRoot 'artifacts\VocabDesk-win-arm64-v1.0.1\VocabDesk.exe'))
if (-not (Test-Path -LiteralPath $exe -PathType Leaf)) { throw "程序不存在：$exe" }
if (-not (Test-Path -LiteralPath $icon -PathType Leaf)) { throw "图标不存在：$icon" }
$shell = New-Object -ComObject WScript.Shell
foreach ($path in @($shortcutPath,$oldShortcutPath)) {
    if (Test-Path -LiteralPath $path) {
        if ($shell.CreateShortcut($path).TargetPath -notin $allowedTargets) { throw "快捷方式指向其他项目，未修改：$path" }
    }
}
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $exe
$shortcut.WorkingDirectory = $releaseFolder
$shortcut.IconLocation = "$icon,0"
$shortcut.Description = '词轨 WordOrbit · 离线英语学习'
$shortcut.Save()
$saved = $shell.CreateShortcut($shortcutPath)
if ($saved.TargetPath -ne $exe -or $saved.IconLocation -ne "$icon,0") { throw '新快捷方式验证失败' }
# Preserve the replaced entry after verifying the new one.
if (Test-Path -LiteralPath $oldShortcutPath) {
    $backupFolder = Join-Path $projectRoot '.build\shortcut-backups'
    New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
    $backup = Join-Path $backupFolder ('词汇真经-' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff') + '.lnk')
    Move-Item -LiteralPath $oldShortcutPath -Destination $backup
    Write-Host "旧入口已备份：$backup"
}
Write-Host "桌面入口已更新：$shortcutPath"
