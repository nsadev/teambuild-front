import React from "react"
import "../Pages/Home/Jumbotron/Jumbotron.css"
import "../../main.css"
import "../Pages/Home/Navbar/Navbar.css"
import logo_text from "../../static/logo_text.png"
import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/">
            <img alt="TeamBuild logo" className="logo" src={logo_text} />
        </Link>
    )
}

export default Logo
