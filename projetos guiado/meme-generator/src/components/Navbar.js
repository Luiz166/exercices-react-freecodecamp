import React from "react"
import Logo from "../images/nav-logo.png"

export default function Navbar() {
    return (
        <nav className="Navbar flex w-100 items-center p-4 bg-gradient-to-r from-purple-900 to-purple-700 h-24 text-white gap-5">
            <img className="max-w-xs w-20 rounded-xl" src={Logo} alt="Logo" />
            <h1 className="text-3xl font-bold">Meme Generator</h1>
            <span className="text-xl ml-auto">React Course - Project 3</span>
        </nav>
    )
}