import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import { BasketProvider } from './contexts/BasketProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <App />
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
