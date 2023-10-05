import React from "react";
import worldLogo from "../images/world.svg";

export default function Navbar() {
    return (
        <nav className="Navbar flex items-center justify-center gap-2 w-full h-12 text-white">
            <img src={worldLogo} alt="worldLogo" />
            <h1>my travel journal.</h1>
        </nav>
    )
}