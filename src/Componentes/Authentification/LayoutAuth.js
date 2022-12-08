import React from "react";
//Outlet component: https://keepcoding.io/blog/componente-outlet-de-react-router/
import { Outlet } from "react-router-dom";
import flaglogo from "../../image/flaglogo.svg";

const LayoutAuth = () => {
    return (
        /*cabecera*/

        <div className="layout-auth align-center"> 
            <div className="logo-flag-container">                
                <img className="logo-flag" src={flaglogo} alt="flag logo" />
            </div>

        {/*Pie de página*/}
        {/*<div className="text-credit">
                    <p>© 2020 Devs_united - <span className="red-font">BETA</span></p>
    </div>*/}
        <div >
                <Outlet /> 
        </div>
        </div>
    )
}

export default LayoutAuth;