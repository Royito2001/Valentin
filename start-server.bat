@echo off
REM Script para Windows - Inicia el servidor local
echo.
echo ========================================
echo   Iniciando servidor local...
echo ========================================
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python no está instalado.
    echo.
    echo Instala Python desde: https://www.python.org/downloads/
    echo O usa la alternativa con Node.js (start-server-node.bat)
    pause
    exit /b 1
)

REM Verificar si qrcode está instalado
python -c "import qrcode" >nul 2>&1
if errorlevel 1 (
    echo Instalando dependencias necesarias...
    pip install qrcode[pil]
    echo.
)

REM Iniciar servidor
python start-server.py

pause

