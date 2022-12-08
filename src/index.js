// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
import {createRoot}  from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import UserProvider from '../src/context/UserContext';
import TweetsProvider from './context/TweetsContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <TweetsProvider>
          <App />
        </TweetsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();