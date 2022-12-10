import React from "react";
//Outlet component: https://keepcoding.io/blog/componente-outlet-de-react-router/
import { Outlet } from "react-router-dom";
import flaglogo from "../../image/flaglogo.svg";

const LayoutAuth = () => {
    return (
        <div className="layout-auth align-center"> 
            <div className="logo-flag-container">                
                <img className="logo-flag" src={flaglogo} alt="flag logo" />
            </div>
        <div >
                <Outlet /> 
        </div>
        </div>
    )
}

export default LayoutAuth;