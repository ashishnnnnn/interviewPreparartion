import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastProvider } from './components/AddNotification/useNotification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  // </React.StrictMode>
);


