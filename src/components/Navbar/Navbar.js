import React from "react";
import "./Navbar.css";
import "../../main.css";
import logo_text from "../../static/logo_text.png";

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="navbar__logo">
        <img alt="TeamBuild logo" className="logo" src={logo_text} />
      </div>
      <div className="navbar__links">
        <a className="navbar__links__link link blue" href="#">
          Apply for membership
        </a>
        <a className="navbar__links__link link black" href="#">
          View Projects
        </a>
      </div>
      <div className="navbar__login">
        <a className="login-button" href="#">
          Log in
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
