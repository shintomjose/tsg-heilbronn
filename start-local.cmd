@echo off
rem One-click local start: serves the app at http://localhost:8000 and opens the browser.
rem The server runs in its own window - close that window (or Ctrl+C) to stop.
cd /d "%~dp0"

set "PY=python"
where python >nul 2>nul || set "PY=py"
where %PY% >nul 2>nul || (
  echo Python not found. Install Python or use: npx serve
  pause
  exit /b 1
)

start "Team 4 - local server (close to stop)" cmd /k %PY% -m http.server 8000
timeout /t 1 /nobreak >nul
start "" http://localhost:8000
