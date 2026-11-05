@echo off
chcp 65001 >nul
title CUSTIMESH - Mesh Modulu Rev16 & Kalinlik Analizi v4.8
echo =========================================================================
echo   CUSTIMESH - 3D Mesh Modulu (Rev16) & Kalinlik Analizi v4.8
echo =========================================================================
echo.
echo Masaustu uygulamasi baslatiliyor...

set "APP_PATH=%~dp0src\index.html"
if not exist "%APP_PATH%" set "APP_PATH=%~dp0index.html"

set "CHROME_X64=C:\Program Files\Google\Chrome\Application\chrome.exe"
set "CHROME_X86=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
set "EDGE_X86=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "EDGE_X64=C:\Program Files\Microsoft\Edge\Application\msedge.exe"

if exist "%CHROME_X64%" (
    start "" "%CHROME_X64%" --app="file:///%APP_PATH%" --window-size=1600,1000 --disable-features=Translate
) else if exist "%CHROME_X86%" (
    start "" "%CHROME_X86%" --app="file:///%APP_PATH%" --window-size=1600,1000 --disable-features=Translate
) else if exist "%EDGE_X86%" (
    start "" "%EDGE_X86%" --app="file:///%APP_PATH%" --window-size=1600,1000 --disable-features=Translate
) else if exist "%EDGE_X64%" (
    start "" "%EDGE_X64%" --app="file:///%APP_PATH%" --window-size=1600,1000 --disable-features=Translate
) else (
    start "" "%APP_PATH%"
)
exit