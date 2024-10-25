@echo off
echo.
echo zip
echo.

%~d0
cd %~dp0

cd ..

set "zip=watercolor-fragrance.zip"

if exist "%zip%" del "%zip%"

set includeList="bin","build","mock","src","public",".eslintignore",".env.*",".gitignore","*.js","*.json","*.md"
powershell Compress-Archive -Path %includeList% -DestinationPath "%cd%\%zip%"