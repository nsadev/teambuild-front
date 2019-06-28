import React from "react"
import Logo from "../Logo/Logo"
import "../../main.css"

const EmptyNavbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default EmptyNavbar
