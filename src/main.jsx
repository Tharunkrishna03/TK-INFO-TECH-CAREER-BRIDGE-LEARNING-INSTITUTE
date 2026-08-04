/**
 * main.jsx
 * Entry point for the React application.
 * Mounts the main App component into the DOM.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import global styles
import './styles.css';

// Render the application within StrictMode for development checks
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
