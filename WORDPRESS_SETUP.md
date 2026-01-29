# Configuration WordPress pour le Blog

Pour connecter le blog à WordPress, vous devez configurer la variable d'environnement `VITE_WP_API_BASE`.

## Étapes de configuration

1. **Créer un fichier `.env`** à la racine du projet (copiez `.env.example` si disponible)

2. **Ajouter votre URL WordPress API** :
   ```
   VITE_WP_API_BASE=https://votre-site-wordpress.com/wp-json/wp/v2
   ```

3. **Vérifier que votre WordPress a l'API REST activée** :
   - L'API REST WordPress est activée par défaut depuis WordPress 4.7+
   - Testez l'API en visitant : `https://votre-site-wordpress.com/wp-json/wp/v2/posts`
   - Vous devriez voir une réponse JSON avec vos articles

4. **Permissions REST API** :
   - Assurez-vous que l'API REST est accessible publiquement (pas de restriction CORS si nécessaire)
   - Si votre site WordPress est sur un autre domaine, configurez CORS dans votre `.htaccess` ou serveur web

5. **Redémarrer le serveur de développement** :
   ```bash
   npm run dev
   ```

## Exemple de configuration

Dans votre fichier `.env` :
```
VITE_WP_API_BASE=https://blog.klik.dj/wp-json/wp/v2
```

## Dépannage

- **Erreur "Missing VITE_WP_API_BASE"** : Vérifiez que le fichier `.env` existe et contient la variable
- **Erreur CORS** : Configurez les en-têtes CORS sur votre serveur WordPress
- **Erreur 404** : Vérifiez que l'URL est correcte et que l'API REST est activée
- **Pas d'articles** : Vérifiez que vous avez des articles publiés dans WordPress
