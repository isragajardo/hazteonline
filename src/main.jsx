import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TemplateProvider } from './context/TemplateContext'; // 👈 nuevo
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TemplateProvider> {/* 🌐 Contexto global para contenido del sitio */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TemplateProvider>
    </ThemeProvider>
  </React.StrictMode>
);

