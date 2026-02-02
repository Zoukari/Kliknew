import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// GITHUB_PAGES env is set in the GitHub Actions workflow
export default defineConfig(() => ({
  base: process.env.GITHUB_PAGES ? '/Kliknew/' : '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    chunkSizeWarningLimit: 1500,
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      // Évite les erreurs CORS en dev : les requêtes Sanity passent par le serveur Vite
      '/api/sanity': {
        target: 'https://ilu5dvrl.apicdn.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sanity/, ''),
      },
    },
  },
}));
