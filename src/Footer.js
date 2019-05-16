import React from "react";
import "./Footer.css";
import logo_text_white from "./static/logo_text_white.svg";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__logo">
        <img
          alt="TeamBuild logo"
          className="footer__logo__img"
          src={logo_text_white}
        />
      </div>
      <div className="footer__links-left">
        <a className="footer__links-left__link link link--white" href="#">
          About
        </a>
        <a className="footer__links-left__link link link--white" href="#">
          The Team
        </a>
      </div>
      <div className="footer__links-right">
        <a className="footer__links-right__link link link--white" href="#">
          FAQ
        </a>
        <a className="footer__links-right__link link link--white" href="#">
          All projects
        </a>
      </div>
      <div className="footer__button">
        <a href="#" className="link link--white">
          Get Started
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
