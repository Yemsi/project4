// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//contextos
import TweetsProvider from "./context/TweetContext";
import UserProvider from "./context/UserContext";

//routes
import LandingPage from "./Componentes/LandingPage";
import TweetsView from "./Componentes/tweetsView";
import Profile from "./Componentes/Profile";

//useNavigate
//https://www.geeksforgeeks.org/reactjs-usenavigate-hook/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
      <TweetsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<TweetsView />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </TweetsProvider>
    </UserProvider>
  </React.StrictMode>
);
//nueva version de react
reportWebVitals();
