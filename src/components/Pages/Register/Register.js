import React, { useState } from "react"
import Background from "../../Background/Background"
import auth from "../../../utils/Auth"
import "../../../main.css"
import "../SignIn/SignIn.css"
import "./Register.css"

const Register = ({ history }) => {
    const [email, setEmail] = useState(null)
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [password, setPassword] = useState(null)
    const [confPw, setConfPw] = useState(null)

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function firstnameChange(e) {
        setFirstname(e.target.value)
    }

    function lastnameChange(e) {
        setLastname(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function confPwChange(e) {
        setConfPw(e.target.value)
    }

    const onSubmitRegister = () => {
        //add feedback messages

        if (email && firstname && lastname && password && confPw) {
            if (password === confPw && password.length >= 8) {
                fetch("/user/register", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        first_name: firstname,
                        last_name: lastname,
                        password: password,
                    }),
                })
                    .then(resp => resp.json())
                    .then(user => {
                        if (user) {
                            // Redirecting to signin page. Normally the person should be able to
                            // by confirming his/her email address by mail, but for now this is the only safe way.
                            auth.login(() => history.push("/"))
                        }
                    })
            } else {
                console.log("Passwords are not matching or too short")
            }
        } else {
            console.log("Every fields are mandatory")
        }
    }

    return (
        <div>
            <Background className="background" />
            <div className="template-container signin-container">
                <div className="register-window">
                    <h1 className="center form-text-color">Register</h1>

                    <form className="signin-form">
                        <label className="form-text-color form-text">
                            E-mail
                        </label>
                        <input
                            className="signin-input form-text-color"
                            type="email"
                            name="e-mail"
                            id="email"
                            onChange={emailChange}
                        />

                        <label className="form-text-color form-text">
                            First name
                        </label>
                        <input
                            className="signin-input form-text-color"
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={firstnameChange}
                        />

                        <label className="form-text-color form-text">
                            Last name
                        </label>
                        <input
                            className="signin-input form-text-color"
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={lastnameChange}
                        />

                        <label className="form-text-color form-text">
                            Password
                        </label>
                        <input
                            className="signin-input form-text-color"
                            type="password"
                            name="password"
                            id="password"
                            onChange={passwordChange}
                        />

                        <label className="form-text-color form-text">
                            Confirm password
                        </label>
                        <input
                            className="signin-input form-text-color"
                            type="password"
                            name="confPw"
                            id="confPw"
                            onChange={confPwChange}
                        />

                        <div className="signin-button center">
                            <a
                                className="cta-button-form"
                                type="submit"
                                onClick={onSubmitRegister}
                            >
                                Register
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
