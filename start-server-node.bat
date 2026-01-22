@echo off
REM Script para Windows con Node.js - Inicia el servidor local
echo.
echo ========================================
echo   Iniciando servidor local (Node.js)...
echo ========================================
echo.

REM Verificar si Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no está instalado.
    echo.
    echo Instala Node.js desde: https://nodejs.org/
    echo O usa la alternativa con Python (start-server.bat)
    pause
    exit /b 1
)

REM Verificar si las dependencias están instaladas
if not exist "node_modules" (
    echo Instalando dependencias necesarias...
    npm install qrcode-terminal
    echo.
)

REM Iniciar servidor
node start-server-node.js

pause

