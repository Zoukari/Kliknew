#!/bin/bash

echo "🚀 Déploiement KLIK sur Vercel..."

# Vérifier le statut git
echo "📋 Vérification du statut git..."
git status

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Commiter avec un message descriptif
echo "💾 Commit des modifications..."
git commit -m "🚀 Deploy: Optimized Vite config with esbuild + Complete SEO optimization

✅ Fixed Vercel build error (terser → esbuild)
✅ Complete SEO optimization for Djibouti market
✅ Multilingual support (FR/EN/AR)
✅ Performance optimizations
✅ Mobile-first responsive design
✅ Web3Forms integration for contact
✅ Structured data (Schema.org)
✅ Open Graph & Twitter Cards
✅ Sitemap & robots.txt optimized

Ready for production deployment! 🎯"

# Pousser sur GitHub
echo "🌐 Push vers GitHub..."
git push origin main

echo "✅ Déploiement lancé !"
echo "🔗 Votre site sera disponible sur: https://klik-ten.vercel.app"
echo "⏱️  Le déploiement prend généralement 2-3 minutes"
echo ""
echo "📊 Vérifiez le statut sur: https://vercel.com/dashboard"
