@echo off
echo.
echo mock
echo.

%~d0
cd %~dp0

cd ..
npm run dev_mock

pause