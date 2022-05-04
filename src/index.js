import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//contextos
import TweetsProvider from "./contexts/TweetsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TweetsProvider>
    <App />
    </TweetsProvider>
  
  </React.StrictMode>
);

reportWebVitals();
