import React, { useState } from "react";
import "./SignIn.css";
import "../../../main.css";
import Logo from "../../Logo/Logo";
import { Link, Redirect } from "react-router-dom";

const SignIn = ({ getUser }) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [authenticated, setAuthenticated] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePwChange(e) {
    setPassword(e.target.value);
  }

  const submitSignin = () => {
    //Add checking conditions

    fetch("/user/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(user => {
        if (user) {
          // State need to wait for update, otherwise user can login only for the 2nd attempt
          setAuthenticated(true);
          console.log(user);
          // User object updating in App.js
          getUser(user);
        }
      });
  };

  if (authenticated === true) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <div>
        <div className="rectangle rectangle-1" />
        <div className="rectangle rectangle-2" />
        <div className="rectangle-small" />
        <div className="rectangle rectangle-3" />
        <div className="rectangle rectangle-4" />
      </div>

      <div className="navbar">
        <div className="container">
          <div className="navbar__logo">
            <Logo />
          </div>
        </div>
      </div>

      <div className="template-container signin-container">
        <div className="signin-window">
          <h1 className="center form-text-color">Sign In</h1>

          <form className="signin-form">
            <label className="form-text-color form-text">E-mail</label>
            <input
              className="signin-input form-text-color"
              type="email"
              name="email"
              onChange={handleEmailChange}
            />

            <label className="form-text form-text-color">Password</label>
            <input
              className="signin-input form-text-color"
              type="password"
              name="password"
              onChange={handlePwChange}
            />

            <div className="signin-button center">
              <a className="cta-button-form" onClick={submitSignin}>
                Sign In
              </a>
            </div>
          </form>

          <div className="center form-text-color signin-footer">
            Don't have an account?{" "}
            <Link className="signin-footer" to="/apply">
              <a href="#">Apply</a>
            </Link>
            {/*Delete when auth logic done*/}
            <br />
            <Link to="/register">Register</Link>
            {/*--------------------------------------*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
