#!/bin/bash

echo "🧹 Nettoyage des fichiers lourds et inutiles..."

# Supprimer tous les fichiers .md de documentation
echo "📄 Suppression des fichiers de documentation..."
rm -f *.md

# Supprimer les scripts de nettoyage
echo "🔧 Suppression des scripts de nettoyage..."
rm -f *.sh

# Supprimer les fichiers de configuration inutiles
echo "⚙️ Suppression des fichiers de config inutiles..."
rm -f package-optimized.json
rm -f vite-optimized.config.ts
rm -f optimize-site.js
rm -f vite.config.ts.timestamp-*.mjs

# Supprimer le dossier footer- klik (déjà intégré)
echo "📁 Suppression du dossier footer- klik..."
rm -rf "footer- klik/"

# Supprimer le dossier .vscode
echo "💻 Suppression du dossier .vscode..."
rm -rf ".vscode/"

# Supprimer les fichiers de hooks inutiles
echo "🪝 Suppression des hooks inutiles..."
rm -f src/hooks/useLazyLoad.ts
rm -f src/LoadingScreen.tsx

# Supprimer le dossier hooks s'il est vide
if [ -d "src/hooks" ] && [ -z "$(ls -A src/hooks)" ]; then
    rmdir src/hooks
fi

echo "✅ Nettoyage terminé !"
echo "📊 Fichiers supprimés :"
echo "   - Tous les fichiers .md de documentation"
echo "   - Tous les scripts .sh"
echo "   - Fichiers de config inutiles"
echo "   - Dossier footer- klik"
echo "   - Dossier .vscode"
echo "   - Hooks inutiles"
echo ""
echo "🚀 Le site est maintenant plus léger et plus rapide !"
