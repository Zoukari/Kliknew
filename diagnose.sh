#!/bin/bash

echo "🔍 Diagnostic du problème Vite"
echo "================================"

echo "📁 Répertoire actuel: $(pwd)"
echo ""

echo "📦 Vérification de Node.js:"
echo "Node version: $(node --version 2>/dev/null || echo 'Node.js non installé')"
echo "NPM version: $(npm --version 2>/dev/null || echo 'NPM non installé')"
echo ""

echo "📂 Vérification des fichiers:"
echo "package.json: $([ -f package.json ] && echo '✅ Présent' || echo '❌ Manquant')"
echo "node_modules: $([ -d node_modules ] && echo '✅ Présent' || echo '❌ Manquant')"
echo "vite binaire: $([ -f node_modules/.bin/vite ] && echo '✅ Présent' || echo '❌ Manquant')"
echo ""

echo "🔧 Test des commandes:"
echo "Test 'vite --version':"
vite --version 2>&1 || echo "❌ Commande 'vite' non trouvée dans PATH"

echo ""
echo "Test 'npx vite --version':"
npx vite --version 2>&1 || echo "❌ npx vite non fonctionnel"

echo ""
echo "Test './node_modules/.bin/vite --version':"
./node_modules/.bin/vite --version 2>&1 || echo "❌ Binaire local non fonctionnel"

echo ""
echo "📋 Contenu de package.json scripts:"
grep -A 10 '"scripts"' package.json || echo "❌ Scripts non trouvés"
