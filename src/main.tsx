import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app.tsx';
import './index.scss';

import './app/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
