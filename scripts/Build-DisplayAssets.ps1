# Mechanical display-resolution derivatives; original illustrations are never changed.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName PresentationCore, WindowsBase
$projectRoot = Split-Path -Parent $PSScriptRoot
$site = Join-Path $projectRoot 'src\VocabDesk\Website'
$sourceFolder = Join-Path $site 'assets\constellation'
$displayFolder = Join-Path $sourceFolder 'display'
New-Item -ItemType Directory -Path $displayFolder -Force | Out-Null

function Write-DisplayPng([string]$Source, [string]$Destination, [int]$PixelWidth) {
    $bitmap = [Windows.Media.Imaging.BitmapImage]::new()
    $bitmap.BeginInit()
    $bitmap.CacheOption = [Windows.Media.Imaging.BitmapCacheOption]::OnLoad
    $bitmap.DecodePixelWidth = $PixelWidth
    $bitmap.UriSource = [Uri]::new((Resolve-Path -LiteralPath $Source).Path)
    $bitmap.EndInit()
    $bitmap.Freeze()
    $encoder = [Windows.Media.Imaging.PngBitmapEncoder]::new()
    $encoder.Frames.Add([Windows.Media.Imaging.BitmapFrame]::Create($bitmap))
    $stream = [IO.File]::Open($Destination, [IO.FileMode]::Create, [IO.FileAccess]::Write)
    try { $encoder.Save($stream) } finally { $stream.Dispose() }
}

$images = @(Get-ChildItem -LiteralPath $sourceFolder -Filter '*.png' -File)
if ($images.Count -ne 22) { throw 'Expected 22 original topic illustrations.' }
foreach ($image in $images) {
    $width = if ($image.Name -eq '05-school-education.png') { 512 } else { 384 }
    Write-DisplayPng $image.FullName (Join-Path $displayFolder $image.Name) $width
}
Write-DisplayPng (Join-Path $site 'wordorbit-earth-mark.png') (Join-Path $site 'assets\display-brand.png') 128
Write-Host 'Display assets ready: 21 topics at 384px, star at 512px, header mark at 128px. Originals preserved.'
