#!/bin/bash

echo "=== Debug Information ==="
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo ""

echo "=== Checking Vite installation ==="
if [ -f "node_modules/.bin/vite" ]; then
    echo "✅ Vite binary found in node_modules/.bin/vite"
    ls -la node_modules/.bin/vite
else
    echo "❌ Vite binary NOT found"
fi
echo ""

echo "=== Trying to run Vite directly ==="
echo "Attempting: ./node_modules/.bin/vite --version"
./node_modules/.bin/vite --version
echo ""

echo "=== Trying with npx ==="
echo "Attempting: npx vite --version"
npx vite --version
echo ""

echo "=== Trying npm run dev ==="
echo "Attempting: npm run dev"
npm run dev
