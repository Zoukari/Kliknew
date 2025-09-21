#!/bin/bash

echo "🔧 Fixing Vite installation..."

echo "1. Removing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

echo "2. Clearing npm cache..."
npm cache clean --force

echo "3. Reinstalling dependencies..."
npm install

echo "4. Testing Vite installation..."
if npx vite --version; then
    echo "✅ Vite is working!"
    echo "5. Starting development server..."
    npm run dev
else
    echo "❌ Vite still not working. Trying alternative approach..."
    echo "6. Installing Vite globally..."
    npm install -g vite
    echo "7. Testing again..."
    npm run dev
fi
