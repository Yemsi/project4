//style
import "../../styles.css";
//image
import logoGoogle from "../../image/logoGoogle.svg";
//react
import React from "react";
import useAuth from "../../hook/useAuth";

const Login = () => {
    const { loginWithGoogle } = useAuth(null);

    return (
        <div className="welcome-container column">
            <h1>Welcome developer!</h1>
            <p className="mg-auto">Logéate para iniciar</p>
            <button className="welcome-button align-center" onClick={() => loginWithGoogle()}>
                <img 
                    className="logoGoogle" 
                    src={logoGoogle} 
                    alt="logo google" />
                <p className="welcome-button-text white-font">Sign in with Google</p>
            <hr/>
            </button>            
            <div className="mg-auto text-font">
                <p claseName="text-font">© 2020 Devs_united - <span className="red-font">BETA</span></p>
            </div>

        </div>
    )
}
export default Login;