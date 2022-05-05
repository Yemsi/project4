//style
import "../styles.css";
//image
import logo from "../image/logo.svg";
import logoGoogle from "../image/logoGoogle.svg";
//react
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import useGoogleAuthentication from "../hook/UseAuthentication";
import { UserContext } from "../context/UserContext";

function LandingPage() {
  const { login } = useGoogleAuthentication();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="initial-page">
      <div>
        <img className="logo" src={logo} alt="main-logo" />
      </div>
      <div className="welcome-zone">
        <h1>Welcome developer!</h1>
        
        <p>Please sign in to be part of our community.</p>
        <button className="button-line" onClick={login}>
          <img className="logoGoogle" src={logoGoogle} alt="google" />
          <p className="button-text">Sign in with Google</p>
          <hr/>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;