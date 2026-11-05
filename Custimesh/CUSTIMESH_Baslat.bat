@echo off
chcp 65001 >nul
title CUSTIMESH Masaustu Baslatici
set "APP_HTML=%~dp0index.html"
set "USER_DATA=%LOCALAPPDATA%\CustimeshApp"
set "EDGE_X86=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "EDGE_X64=C:\Program Files\Microsoft\Edge\Application\msedge.exe"
set "CHROME=C:\Program Files\Google\Chrome\Application\chrome.exe"

if exist "%EDGE_X86%" (
    start "" "%EDGE_X86%" --app="file:///%APP_HTML%" --window-size=1600,1000 --user-data-dir="%USER_DATA%" --disable-features=Translate
) else if exist "%EDGE_X64%" (
    start "" "%EDGE_X64%" --app="file:///%APP_HTML%" --window-size=1600,1000 --user-data-dir="%USER_DATA%" --disable-features=Translate
) else if exist "%CHROME%" (
    start "" "%CHROME%" --app="file:///%APP_HTML%" --window-size=1600,1000 --user-data-dir="%USER_DATA%" --disable-features=Translate
) else (
    start "" "%APP_HTML%"
)
exit