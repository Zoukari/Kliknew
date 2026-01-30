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
  },
}));
