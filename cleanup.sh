#!/bin/bash

echo "🧹 Nettoyage des fichiers inutiles..."

# Supprimer les fichiers de la page de chargement et des hooks
rm -f src/LoadingScreen.tsx
rm -f src/hooks/useLazyLoad.ts
rmdir src/hooks 2>/dev/null || true

echo "✅ Nettoyage terminé !"
echo "🎯 Le cube 3D original est maintenant restauré"
