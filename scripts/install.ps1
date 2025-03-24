
Write-Host "Installing better-aoty extension..." -ForegroundColor Blue

try {
    $configPath = (spicetify -c) | Out-String
    $configPath = $configPath.Trim()

    if ($configPath -and (Test-Path $configPath)) {
        $configDir = Split-Path -Parent $configPath
        $extensionsDir = Join-Path $configDir "Extensions"

        Write-Host "Found Spicetify config at: $configPath" -ForegroundColor Blue
        Write-Host "Using Extensions directory: $extensionsDir" -ForegroundColor Blue
    } else {
        throw "Config path not found"
    }
} catch {
    Write-Host "Could not find Spicetify config. Is Spicetify installed?" -ForegroundColor Yellow

    $extensionsDir = "$env:APPDATA\spicetify\Extensions"
    Write-Host "Using default path: $extensionsDir" -ForegroundColor Blue
}

if (-not (Test-Path $extensionsDir)) {
    New-Item -ItemType Directory -Path $extensionsDir -Force | Out-Null
}

Write-Host "Downloading latest version..." -ForegroundColor Blue
$url = "https://github.com/jawad/better-aoty/releases/latest/download/better-aoty.js"
$outputPath = Join-Path $extensionsDir "better-aoty.js"

try {
    Invoke-WebRequest -Uri $url -OutFile $outputPath
}
catch {
    Write-Host "Error: Download failed" -ForegroundColor Red
    Write-Host $_.Exception.Message
    exit 1
}

Write-Host "Enabling extension..." -ForegroundColor Blue
try {
    spicetify config extensions better-aoty.js
}
catch {
    Write-Host "Error: Failed to enable extension" -ForegroundColor Red
    Write-Host $_.Exception.Message
    exit 1
}

Write-Host "Applying changes to Spotify..." -ForegroundColor Blue
try {
    spicetify apply
}
catch {
    Write-Host "Error: Failed to apply changes" -ForegroundColor Red
    Write-Host $_.Exception.Message
    exit 1
}

Write-Host "✓ better-aoty has been successfully installed!" -ForegroundColor Green
