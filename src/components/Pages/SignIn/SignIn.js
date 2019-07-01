import React, { useState, Fragment } from "react"
import { Link } from "react-router-dom"

import EmptyNavbar from "../../EmptyNavbar/EmptyNavbar"
import auth from "../../../utils/Auth"

import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [message, setMessage] = useState(null)

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePwChange(e) {
        setPassword(e.target.value)
    }

    const submitSignin = () => {
        if (email && password) {
            try {
                fetch("/user/login", {
                    method: "post",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                })
                    .then(resp => resp.json())
                    .then(user => {
                        if (user.message === "Login successful") {
                            // Set key-value pair in LocalStorage for Loader Icon.
                            localStorage.setItem("teambuild", "true")
                            // Set user as authenticated and redirect user to app
                            auth.login(() => window.location.assign("/"))
                        } else {
                            setMessage(user.message)
                        }
                    })
            } catch (e) {
                setMessage(
                    "Server is not available, check your connection or try again later"
                )
            }
        } else {
            setMessage("Please provide your E-mail and Password")
        }
    }

    return (
        <Fragment>
            <EmptyNavbar />
            <div className="blocks-background">
                <div className="signin-container">
                    <div className="signin-window">
                        <h1 className="center form-text-color">Log In</h1>

                        <form className="signin-form">
                            <label className="form-text-color form-text">
                                E-mail
                            </label>
                            <input
                                className="signin-input form-text-color"
                                type="email"
                                name="email"
                                onChange={handleEmailChange}
                            />

                            <label className="form-text form-text-color">
                                Password
                            </label>
                            <input
                                className="signin-input form-text-color"
                                type="password"
                                name="password"
                                onChange={handlePwChange}
                            />

                            <div className="error-msg center">
                                <p>{message}</p>
                            </div>

                            <div className="signin-button center">
                                <a
                                    className="cta-button-form"
                                    onClick={submitSignin}
                                >
                                    Log In
                                </a>
                            </div>
                        </form>

                        <div className="center form-text-color signin-footer">
                            Don't have an account?
                            <Link className="signin-footer" to="/apply">
                                <a href="#"> Apply</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn
