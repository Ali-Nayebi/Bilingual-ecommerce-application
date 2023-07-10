import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getDirection } from './localization/index';

document.getElementsByTagName('body')[0].setAttribute('dir', getDirection());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
