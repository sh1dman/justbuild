# ═══════════════════════════════════════════════════════════
# JustBuild — One-Command Windows Setup
# Run: irm https://raw.githubusercontent.com/sh1dman/justbuild/main/scripts/setup-windows.ps1 | iex
# Idempotent — safe to run multiple times.
# ═══════════════════════════════════════════════════════════

$ErrorActionPreference = "Stop"

$REPO_URL = "https://github.com/sh1dman/justbuild.git"
$INSTALL_DIR = "$env:USERPROFILE\Desktop\just-build"

Write-Host ""
Write-Host "  ╔══════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║         JustBuild Setup 💀       ║" -ForegroundColor Cyan
Write-Host "  ╚══════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# --- 1. Node.js ---
$nodeInstalled = $false
try {
    $nodeVersion = node -v 2>$null
    if ($nodeVersion) {
        $major = [int]($nodeVersion -replace 'v','').Split('.')[0]
        if ($major -ge 20) {
            Write-Host "✓ Node.js $nodeVersion already installed" -ForegroundColor Green
            $nodeInstalled = $true
        }
    }
} catch {}

if (-not $nodeInstalled) {
    Write-Host "→ Installing Node.js..." -ForegroundColor Yellow
    # Try winget first (built into Windows 10/11)
    $hasWinget = Get-Command winget -ErrorAction SilentlyContinue
    if ($hasWinget) {
        winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements --silent
        # Refresh PATH
        $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")
    } else {
        Write-Host "  winget not found. Downloading Node.js installer..." -ForegroundColor Yellow
        $nodeInstaller = "$env:TEMP\node-setup.msi"
        Invoke-WebRequest -Uri "https://nodejs.org/dist/v22.12.0/node-v22.12.0-x64.msi" -OutFile $nodeInstaller
        Start-Process msiexec.exe -ArgumentList "/i `"$nodeInstaller`" /quiet /norestart" -Wait
        Remove-Item $nodeInstaller -Force
        # Refresh PATH
        $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")
    }

    try {
        $v = node -v
        Write-Host "✓ Node.js $v installed" -ForegroundColor Green
    } catch {
        Write-Host "⚠ Node.js installed but not in PATH yet. Please close and reopen PowerShell, then run this script again." -ForegroundColor Red
        exit 1
    }
}

# --- 2. Git ---
$gitInstalled = $false
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "✓ Git already installed" -ForegroundColor Green
        $gitInstalled = $true
    }
} catch {}

if (-not $gitInstalled) {
    Write-Host "→ Installing Git..." -ForegroundColor Yellow
    $hasWinget = Get-Command winget -ErrorAction SilentlyContinue
    if ($hasWinget) {
        winget install Git.Git --accept-package-agreements --accept-source-agreements --silent
        $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")
    } else {
        Write-Host "⚠ Please install Git manually from https://git-scm.com/download/win" -ForegroundColor Red
        Write-Host "  Then re-run this script." -ForegroundColor Red
        exit 1
    }
}

# --- 3. Codex CLI ---
try {
    $codexVersion = codex --version 2>$null
    if ($codexVersion) {
        Write-Host "→ Updating Codex CLI..." -ForegroundColor Yellow
        npm update -g @openai/codex 2>$null
    }
} catch {
    Write-Host "→ Installing Codex CLI..." -ForegroundColor Yellow
    npm install -g @openai/codex
}

# --- 4. Clone repo ---
if (Test-Path $INSTALL_DIR) {
    Write-Host "✓ Project already exists at $INSTALL_DIR" -ForegroundColor Green
    Set-Location $INSTALL_DIR
    git pull --ff-only 2>$null
} else {
    Write-Host "→ Downloading project..." -ForegroundColor Yellow
    git clone $REPO_URL $INSTALL_DIR
    Set-Location $INSTALL_DIR
}

# --- 5. Install dependencies ---
Write-Host "→ Installing dependencies..." -ForegroundColor Yellow
npm install

# --- 6. Install antigravity-awesome-skills ---
Write-Host "→ Installing AI skills..." -ForegroundColor Yellow
npx -y antigravity-awesome-skills --codex 2>$null

# --- 7. Fix skill YAML formatting ---
Write-Host "→ Fixing skill formatting..." -ForegroundColor Yellow
$fixScript = @'
const fs = require('fs');
const path = require('path');
const skillsDir = path.join(process.env.USERPROFILE || process.env.HOME, '.codex', 'skills');
if (!fs.existsSync(skillsDir)) process.exit(0);
const dirs = fs.readdirSync(skillsDir);
for (const dir of dirs) {
  const skillPath = path.join(skillsDir, dir, 'SKILL.md');
  if (fs.existsSync(skillPath)) {
    let lines = fs.readFileSync(skillPath, 'utf8').split('\n');
    let modified = false;
    if (lines[0].trim() === '---') {
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('---') && line.length > 3) {
          lines[i] = '---\n<!-- ' + line.substring(3).trim() + ' -->';
          modified = true; break;
        } else if (line === '---') break;
      }
    }
    let frontmatterEndIndex = -1, dashCount = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '---' || lines[i].startsWith('--- ')) {
        dashCount++;
        if (dashCount === 2) { frontmatterEndIndex = i; break; }
      }
    }
    if (frontmatterEndIndex !== -1) {
      for (let i = frontmatterEndIndex + 1; i < lines.length; i++) {
        if (lines[i].trim() === '---' || lines[i].startsWith('--- ')) {
          lines[i] = '***'; modified = true;
        }
      }
    }
    if (modified) fs.writeFileSync(skillPath, lines.join('\n'));
  }
}
'@

$fixPath = "$env:TEMP\fix_yaml.cjs"
Set-Content -Path $fixPath -Value $fixScript
node $fixPath
Remove-Item $fixPath -Force

# --- 8. Kill any existing process on port 3000 ---
$procs = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
if ($procs) {
    foreach ($p in $procs) {
        Stop-Process -Id $p -Force -ErrorAction SilentlyContinue
    }
}

# --- 9. Start dev server ---
Write-Host "→ Starting dev server..." -ForegroundColor Yellow
$devJob = Start-Job -ScriptBlock {
    Set-Location $using:INSTALL_DIR
    npm run dev 2>&1 | Out-Null
}

# --- 10. Wait for server ---
Write-Host "→ Waiting for your app to start..." -ForegroundColor Yellow
$tries = 0
$maxTries = 30
while ($tries -lt $maxTries) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 2 -ErrorAction SilentlyContinue
        if ($response.StatusCode -eq 200) { break }
    } catch {}
    Start-Sleep -Seconds 1
    $tries++
}

if ($tries -ge $maxTries) {
    Write-Host "⚠ Dev server took too long. Open the just-build folder on your Desktop and double-click run.bat" -ForegroundColor Red
}

# --- 11. Open browser ---
Write-Host "→ Opening browser..." -ForegroundColor Yellow
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "  ✓ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Your app is running in the browser." -ForegroundColor White
Write-Host "  When Codex opens below, sign in with your ChatGPT account." -ForegroundColor White
Write-Host ""

# --- 12. Launch Codex ---
Set-Location $INSTALL_DIR
codex --full-auto
