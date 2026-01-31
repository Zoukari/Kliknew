# 🐛 Troubleshooting - KLIK Website

## Problème : Redirections intempestives sur mobile

### Symptômes
- Toutes les pages (Home, About, Services, Learn, Entertainment) redirigent vers une autre page quand on clique n'importe où en responsive
- Le problème se produit uniquement sur mobile/responsive

### Diagnostic

Le problème vient probablement de :

1. **Menu mobile qui reste ouvert** : Le menu full-page a un overlay avec `z-[55]` qui peut capturer les clics
2. **Body avec `no-scroll`** : La classe peut rester active et bloquer les interactions
3. **Overlay invisible** : Un élément transparent peut capturer tous les clics

### Solutions à tester

#### 1. Vérifier que le menu mobile se ferme correctement

Ouvre les DevTools de ton navigateur (F12) et vérifie :

```javascript
// Dans la console, vérifie si le body a la classe no-scroll
document.body.classList.contains('no-scroll') // doit être false quand le menu est fermé
```

#### 2. Vérifier les overlays actifs

```javascript
// Trouve tous les éléments fixes avec un z-index élevé
[...document.querySelectorAll('*')].filter(el => {
  const style = window.getComputedStyle(el);
  return style.position === 'fixed' && parseInt(style.zIndex) > 50;
}).forEach(el => console.log(el, window.getComputedStyle(el).zIndex));
```

#### 3. Fermer manuellement le menu

Si le menu reste bloqué, clique sur le bouton hamburger (en haut à droite) pour le fermer.

### Fix rapide

Si le problème persiste, ajoute ce code dans la console du navigateur :

```javascript
// Forcer la fermeture du menu
document.body.classList.remove('no-scroll');

// Masquer l'overlay du menu
document.querySelectorAll('[class*="fixed inset-0"]').forEach(el => {
  if (el.className.includes('z-[55]')) {
    el.style.display = 'none';
  }
});
```

### Fix permanent (à implémenter)

1. Assure-toi que le menu mobile se ferme sur chaque navigation
2. Ajoute un listener sur le router pour fermer le menu automatiquement
3. Vérifie que `closeMenu()` est appelé dans `App.tsx`

## Problème : Scroll horizontal bloqué (section clients)

### Solution
✅ **CORRIGÉ** : Ajout de `touchAction: 'pan-x'` et `overscrollBehavior: 'contain'` dans `src/pages/Home.tsx`

## Problème : stripHtml is not defined

### Solution
✅ **CORRIGÉ** : Remplacement de WordPress par Sanity dans `src/pages/BlogIndex.tsx`. Les données Sanity retournent déjà du texte brut, pas du HTML.

## Démarrage rapide

```bash
# Site principal
npm run dev

# Sanity Studio
cd studio-klik
npm install
npm run dev
```

- Site : http://localhost:5174
- Studio : http://localhost:3333

## Besoin d'aide ?

1. Vérifie les logs dans la console (F12)
2. Rafraîchis la page (Ctrl+Shift+R pour vider le cache)
3. Teste sur un autre navigateur
4. Contacte l'équipe KLIK si le problème persiste
