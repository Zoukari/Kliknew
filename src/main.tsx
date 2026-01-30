import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.css';

console.log('KLIK: App starting...');

try {
  const root = document.getElementById('root');
  if (!root) {
    console.error('KLIK: Root element not found!');
  } else {
    console.log('KLIK: Mounting React app...');
    createRoot(root).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
    console.log('KLIK: React app mounted successfully');
  }
} catch (error) {
  console.error('KLIK: Failed to mount app:', error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<div style="color:white;padding:20px;text-align:center;"><h1>Erreur de chargement</h1><p>Veuillez rafraîchir la page.</p></div>';
  }
}
