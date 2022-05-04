import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//contextos
import TweetsProvider from "./context/TweetContext";
import UserProvider from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Componentes/LandingPage";
import TweetsView from "./Componentes/tweetsView";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
      <TweetsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<TweetsView />} />
          </Routes>
        </BrowserRouter>
      </TweetsProvider>
    </UserProvider>
  
  </React.StrictMode>
);

reportWebVitals();
