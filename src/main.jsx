import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ShopProvider } from './context/ShopContext';
import { UIProvider } from './context/UIContext';
import './styles/fonts.css';
import './styles/variables.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);