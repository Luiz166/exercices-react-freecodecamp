import React from "react";
import AirbnbLogo from "../images/airbnb-1.svg";

export default function Navbar(){
    return(
        <nav className="Navbar">
            <img src={AirbnbLogo} alt="Logo"/>
        </nav>
    )
}