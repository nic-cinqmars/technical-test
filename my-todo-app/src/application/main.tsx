import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { ThemeProvider } from '../theme/theme-provider';
import Router from './router/Router';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
      <Toaster />
    </App>
  </React.StrictMode>
);
