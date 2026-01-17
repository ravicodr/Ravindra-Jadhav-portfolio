#!/bin/bash

# Cosmic Portfolio - Quick Installation Test Script
# Run this to verify everything works before deploying

echo "🚀 Cosmic Portfolio - Installation Test"
echo "========================================"
echo ""

# Check Node version
echo "📦 Checking Node version..."
NODE_VERSION=$(node --version)
echo "Node: $NODE_VERSION"

# Check NPM version  
NPM_VERSION=$(npm --version)
echo "NPM: $NPM_VERSION"
echo ""

# Clean previous installations
echo "🧹 Cleaning previous installations..."
rm -rf node_modules package-lock.json .next
echo "✓ Cleaned"
echo ""

# Install dependencies
echo "📥 Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "❌ Installation failed"
    exit 1
fi
echo ""

# Check for vulnerabilities
echo "🔒 Checking for vulnerabilities..."
npm audit
echo ""

# Build the project
echo "🔨 Building project..."
npm run build
if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
else
    echo "❌ Build failed"
    exit 1
fi
echo ""

# Summary
echo "========================================"
echo "✅ ALL TESTS PASSED!"
echo "========================================"
echo ""
echo "Your portfolio is ready to deploy! 🎉"
echo ""
echo "Next steps:"
echo "1. Push to GitHub"
echo "2. Deploy on Vercel"
echo "3. Cost: ₹0 (FREE)"
echo ""
echo "To start dev server: npm run dev"
