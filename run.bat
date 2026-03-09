@echo off
REM ═══════════════════════════════════════════════════════════
REM JustBuild — Resume Script (Windows)
REM Double-click this file to restart your project
REM ═══════════════════════════════════════════════════════════

cd /d "%~dp0"

echo.
echo   ╔══════════════════════════════════╗
echo   ║         JustBuild               ║
echo   ╚══════════════════════════════════╝
echo.

REM Check for node
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo   Node.js not found.
    echo   Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

REM Check dependencies
if not exist "node_modules" (
    echo → Installing dependencies...
    call npm install
) else (
    echo ✓ Dependencies ready
)

REM Kill any existing process on port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING 2^>nul') do (
    taskkill /PID %%a /F >nul 2>&1
)

REM Start dev server in background
echo → Starting dev server...
start /b cmd /c "npm run dev >nul 2>&1"

REM Wait for server
echo → Waiting for your app to start...
set tries=0
:wait_loop
if %tries% GEQ 30 goto wait_done
timeout /t 1 /nobreak >nul
curl -s -o nul http://localhost:3000 >nul 2>&1
if %ERRORLEVEL% EQU 0 goto wait_done
set /a tries+=1
goto wait_loop
:wait_done

REM Open browser
start http://localhost:3000

echo.
echo   ✓ Ready! Launching Codex...
echo.

REM Launch Codex
codex --full-auto
