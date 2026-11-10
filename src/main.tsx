import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function mountApp() {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } else {
    console.error('Elemento #root não encontrado no DOM!');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
