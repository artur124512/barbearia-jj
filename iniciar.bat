@echo off
title Barbearia Imperial - Servidor Local
echo ========================================================
echo   BARBEARIA IMPERIAL - INICIANDO APLICACAO LOCAL
echo ========================================================
echo.
cd /d "%~dp0"
call npm.cmd run dev
pause
