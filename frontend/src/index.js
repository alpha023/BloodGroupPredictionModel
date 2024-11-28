// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext'; // Importing ThemeProvider
import './index.css'; // Importing global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrapping the App component with the ThemeProvider to manage global theme state
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
