import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { site } from './config/site';
import './index.css';

document.documentElement.style.setProperty('--brand', site.brandColor);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
