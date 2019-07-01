import React, { useState } from "react"
import EmptyNavbar from "../../EmptyNavbar/EmptyNavbar"
import auth from "../../../utils/Auth"
import "../../../main.css"
import "../SignIn/SignIn.css"
import "./Register.css"

const Register = ({ history }) => {
    const [email, setEmail] = useState(null)
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [github, setGithub] = useState(null)
    const [role, setRole] = useState(null)
    const [password, setPassword] = useState(null)
    const [confPw, setConfPw] = useState(null)
    const [message, setMessage] = useState(null)

    function emailChange(e) {
        setEmail(e.target.value)
    }

    function firstnameChange(e) {
        setFirstname(e.target.value)
    }

    function lastnameChange(e) {
        setLastname(e.target.value)
    }

    function githubChange(e) {
        setGithub(e.target.value)
    }

    function roleChange(e) {
        setRole(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function confPwChange(e) {
        setConfPw(e.target.value)
    }


    const onSubmitRegister = () => {
        //add feedback messages

        if (email && firstname && lastname && github && role && password && confPw) {
            if (password.length >= 8) {
                if (password === confPw) {
                    fetch("/user/register", {
                        method: "post",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: email,
                            first_name: firstname,
                            last_name: lastname,
                            github: github,
                            role: role,
                            password: password,
                        }),
                    })
                        .then(resp => resp.json())
                        .then(user => {
                            if (user) {
                                // Redirecting to the profile page. As only admin is able to add
                                // new registration in the beginning
                                setMessage(user.message)
                                if (
                                    user.message === "Registration successful"
                                ) {
                                    auth.login(() => history.push("/"))
                                }
                            }
                        })
                } else {
                    setMessage("Passwords are not matching")
                }
            } else {
                setMessage("Password is too short")
            }
        } else {
            setMessage("Every fields are mandatory")
        }
    }

    return (
        <div>
            <EmptyNavbar />
            <div className="template-container signin-container">
                <div className="register-window">
                    <h1 className="center form-text-color">Register</h1>

                    <form className="signin-form">
                        <label className="form-text-color form-text">
                            E-mail
                        </label>
                        <input
                            className="signin-input"
                            type="email"
                            name="e-mail"
                            id="email"
                            onChange={emailChange}
                        />



                        <div className="form-inline">
                            <label className="form-text-color form-text">
                                First name
                            </label>
                            <input
                                className="signin-input"
                                type="text"
                                name="firstname"
                                id="firstname"
                                onChange={firstnameChange}
                            />
                        </div>

                        <div className="form-inline" style={{float: "right"}}>
                            <label className="form-text-color form-text">
                                Last name
                            </label>
                            <input
                                className="signin-input "
                                type="text"
                                name="lastname"
                                id="lastname"
                                onChange={lastnameChange}
                            />
                        </div>

                        <label className="form-text-color form-text">
                            GitHub Account
                        </label>
                        <input
                            className="signin-input form-text"
                            type="text"
                            name="github"
                            id="github"
                            onChange={githubChange}
                        />

                        <label className="form-text-color form-text">
                            Role
                        </label>

                        <select
                            className="signin-input form-text no-bg"
                            name="role"
                            onChange={roleChange}
                        >
                            <option>Select role</option>
                            <option value="Designer" >Designer</option>
                            <option value="Front-End" >Front-End</option>
                            <option value="Back-End" >Back-End</option>
                            <option value="Full-Stack" >Full-Stack</option>
                        </select>

                        <div className="form-inline">
                            <label className="form-text-color form-text">
                                Password
                                <ins className="field-info">
                                    {" "}
                                    min 8 characters
                                </ins>
                            </label>
                            <input
                                className="signin-input "
                                type="password"
                                name="password"
                                id="password"
                                onChange={passwordChange}
                            />
                        </div>

                        <div className="form-inline" style={{float: "right"}}>
                            <label className="form-text-color form-text">
                                Confirm password
                            </label>
                            <input
                                className="signin-input"
                                type="password"
                                name="confPw"
                                id="confPw"
                                onChange={confPwChange}
                            />
                        </div>

                        <div className="error-msg">
                            <p>{message}</p>
                        </div>

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
