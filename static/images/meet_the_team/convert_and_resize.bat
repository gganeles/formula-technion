@echo on
setlocal enabledelayedexpansion

REM Always run in the folder where this .bat is located
cd /d "%~dp0"

if not exist "webp" mkdir "webp"
if not exist "lowerRes" mkdir "lowerRes"

echo Running from: %CD%

REM Convert ALL jpg/jpeg (any case) using DIR list (more reliable)
for /f "delims=" %%F in ('dir /b /a-d "*.jpg" "*.jpeg"') do (
    echo Converting: %%F
    cwebp -q 80 "%%F" -o "webp\%%~nF.webp"
    if errorlevel 1 echo FAILED converting: %%F
)

REM Resize the converted webps to 1080px height
for /f "delims=" %%F in ('dir /b /a-d "webp\*.webp"') do (
    echo Resizing: %%F
    cwebp -q 80 "webp\%%F" -resize 0 1080 -o "lowerRes\%%~nF.webp"
    if errorlevel 1 echo FAILED resizing: %%F
)

echo.
echo Done. Outputs:
echo   %CD%\webp
echo   %CD%\lowerRes
pause
