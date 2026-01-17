@echo off
REM Cosmic Portfolio - Quick Installation Test Script (Windows)
REM Run this to verify everything works before deploying

echo.
echo ========================================
echo 🚀 Cosmic Portfolio - Installation Test
echo ========================================
echo.

REM Check Node version
echo 📦 Checking Node version...
node --version
echo.

REM Check NPM version
echo 📦 Checking NPM version...
npm --version
echo.

REM Clean previous installations
echo 🧹 Cleaning previous installations...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next
echo ✓ Cleaned
echo.

REM Install dependencies
echo 📥 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Installation failed
    exit /b 1
)
echo ✓ Dependencies installed successfully
echo.

REM Check for vulnerabilities
echo 🔒 Checking for vulnerabilities...
call npm audit
echo.

REM Build the project
echo 🔨 Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    exit /b 1
)
echo ✓ Build successful!
echo.

REM Summary
echo ========================================
echo ✅ ALL TESTS PASSED!
echo ========================================
echo.
echo Your portfolio is ready to deploy! 🎉
echo.
echo Next steps:
echo 1. Push to GitHub
echo 2. Deploy on Vercel
echo 3. Cost: ₹0 (FREE)
echo.
echo To start dev server: npm run dev
echo.
pause
