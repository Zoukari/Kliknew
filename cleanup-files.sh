#!/bin/bash

echo "🧹 Nettoyage des fichiers inutiles..."

# Supprimer les fichiers de la page de chargement et des hooks
rm -f src/LoadingScreen.tsx
rm -f src/hooks/useLazyLoad.ts
rmdir src/hooks 2>/dev/null || true

# Supprimer les fichiers de debug et documentation
rm -f debug.sh
rm -f fix-install.sh
rm -f start-dev.sh
rm -f diagnose.sh
rm -f DEBUG-README.md
rm -f PERFORMANCE-OPTIMIZATIONS.md
rm -f cleanup.sh

echo "✅ Nettoyage terminé !"
echo "🎯 Le cube 3D original est maintenant restauré"
echo "🚀 Le site est prêt avec toutes les améliorations demandées :"
echo "   - Logo visible en mode sombre"
echo "   - Détails clients mis à jour"
echo "   - Design futuristique avec effets glass et néon"
echo "   - Performance optimisée"
