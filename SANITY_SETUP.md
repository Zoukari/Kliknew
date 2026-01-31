# Configuration Sanity pour KLIK Blog

Ce projet utilise **Sanity CMS** pour gérer le blog.

## 🚀 Démarrage rapide

### 1. Installer les dépendances du Studio

```bash
cd studio-klik
npm install
```

### 2. Lancer Sanity Studio localement

```bash
npm run dev
```

Le Studio sera accessible sur **http://localhost:3333**

### 3. Créer votre premier article

1. Ouvrez http://localhost:3333
2. Connectez-vous avec votre compte Sanity (Google, GitHub ou email)
3. Cliquez sur "Post" dans le menu de gauche
4. Créez un nouvel article avec :
   - **Title** : Titre de l'article
   - **Slug** : URL de l'article (généré automatiquement)
   - **Excerpt** : Court résumé
   - **Main image** : Image principale
   - **Published at** : Date de publication
   - **Body** : Contenu de l'article (Portable Text)
5. Cliquez sur **Publish** pour publier

### 4. Vérifier les articles sur le site

Lancez le site principal :

```bash
cd ..
npm run dev
```

Allez sur http://localhost:5174/blog pour voir vos articles.

## 📦 Configuration

- **Project ID** : `ilu5dvrl`
- **Dataset** : `production`
- **Plan** : Free (jusqu'à 3 utilisateurs, 10GB de bande passante/mois)

## 🔧 API Sanity

Les requêtes API sont configurées dans `src/lib/sanity.ts` :

- `getPosts()` : Récupère les 12 derniers articles
- `getPostBySlug(slug)` : Récupère un article par son slug

## 📝 Schema

Le schema des articles est défini dans `studio-klik/schemas/post.ts` :

- `title` : string (requis)
- `slug` : slug (requis, généré depuis le titre)
- `excerpt` : text (optionnel)
- `mainImage` : image (optionnel)
- `publishedAt` : datetime (requis)
- `body` : array[block] (Portable Text, optionnel)

## 🌐 Déploiement du Studio

Pour déployer le Studio sur Sanity.io :

```bash
cd studio-klik
npm run build
sanity deploy
```

Votre Studio sera accessible sur `https://klik.sanity.studio`

## 🔗 Liens utiles

- [Dashboard Sanity](https://www.sanity.io/manage/personal/project/ilu5dvrl)
- [Documentation Sanity](https://www.sanity.io/docs)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## ⚠️ Troubleshooting

### Erreur "Unable to load posts"

1. Vérifiez que vous avez publié au moins un article dans le Studio
2. Vérifiez que le `projectId` et `dataset` sont corrects dans `src/lib/sanity.ts`
3. Vérifiez que les CORS sont autorisés sur Sanity.io/manage

### CORS

Si vous avez des erreurs CORS, ajoutez `http://localhost:5173` et `http://localhost:5174` dans les origines autorisées sur [Sanity.io/manage](https://www.sanity.io/manage/personal/project/ilu5dvrl/api/cors).
