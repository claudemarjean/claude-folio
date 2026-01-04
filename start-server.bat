@echo off
echo ========================================
echo   Portfolio Vanilla JS - Serveur Local
echo ========================================
echo.
echo Demarrage du serveur HTTP...
echo.

REM Verifier si Python est installe
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python n'est pas installe ou n'est pas dans le PATH.
    echo Veuillez installer Python ou ouvrir index.html directement.
    pause
    exit /b
)

echo Serveur demarre sur http://localhost:8000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

REM Demarrer le serveur
python -m http.server 8000

pause
