import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure this path matches your project structure
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
