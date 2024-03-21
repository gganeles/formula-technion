REM Loop through each file in the current directory
for %%F in (*.webp) do (
    REM Convert CR2 to WebP'
    cwebp -q 80 "%%F" -resize 0 1080 -o "lowerRes\%%~nF.webp" 
)

echo All CR2 files converted to WebP.

pause
