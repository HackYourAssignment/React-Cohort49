import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);
