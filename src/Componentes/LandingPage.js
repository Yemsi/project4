//style
import "../styles.css";
//image
import logo from "../image/logo.svg";
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
        <h2>Welcome developer!</h2>
        <p>Please sign in to be part of our community.</p>
        <button onClick={login}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default LandingPage;