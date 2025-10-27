#!/bin/bash

echo "🎯 HARMONISATION DES CUBES - KLIK"

# Vérifier le statut git
echo "📋 Vérification du statut git..."
git status

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Commiter avec un message descriptif
echo "💾 Commit des modifications..."
git commit -m "🎯 HARMONISATION: Cubes identiques sur mobile et desktop

✅ Unifié les classes CSS (.rotating-face:nth-child)
✅ Styles identiques pour les faces du cube
✅ Même background: rgba(var(--primary), 0.05)
✅ Même border: 2px solid rgba(var(--primary), 0.3)
✅ Même backdrop-filter: blur(8px)
✅ Même box-shadow et animation glow
✅ Même animation iconPulse pour les SVG
✅ Transformations identiques (rotateY, rotateX, translateZ)

🎯 Les cubes sont maintenant parfaitement identiques !"

# Pousser sur GitHub
echo "🌐 Push vers GitHub..."
git push origin main

echo ""
echo "✅ HARMONISATION DES CUBES DÉPLOYÉE !"
echo ""
echo "🎯 HARMONISATIONS APPLIQUÉES :"
echo "   - Classes CSS unifiées (.rotating-face:nth-child)"
echo "   - Styles identiques pour les faces du cube"
echo "   - Même background et border"
echo "   - Même backdrop-filter et box-shadow"
echo "   - Même animation glow et iconPulse"
echo "   - Transformations identiques"
echo ""
echo "🔗 Votre site sera mis à jour sur: https://klik-ten.vercel.app"
echo "⏱️  Le déploiement prend généralement 1-2 minutes"
echo ""
echo "📱💻 Testez maintenant - les cubes seront parfaitement identiques !"

