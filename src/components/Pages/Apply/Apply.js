import React, { useState } from "react"
import "../../../main.css"
import "./Apply.css"
import "../SignIn/SignIn.css"


import Background from "../../Background/Background"

const Apply = props => {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [textArea, setTextArea] = useState(null)
    const [githubName, setGithubName] = useState(null)

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onNameChange(e) {
        setName(e.target.value)
    }

    function onTextChange(e) {
        setTextArea(e.target.value)
    }

    function onGithubNameChange(e) {
        setGithubName(e.target.value)
    }

    function onSubmit() {
        fetch("http://localhost:5000/apply", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                name,
                githubName,
                textArea,
            }),
        }).then(response => response.json())
    }

    return (
        <div>
            <Background />

            <div className="template-container apply-container">
                <div className="apply-window">
                    <h1 className="center form-text-color">Application</h1>

                    <form className="apply-form">
                        <label className="form-text-color form-text">
                            Name
                        </label>
                        <input
                            className="signin-input apply-input form-text-color"
                            type="name"
                            name="name"
                            onChange={onNameChange}
                        />

                        <label className="form-text form-text-color">
                            E-mail
                        </label>
                        <input
                            className="signin-input apply-input form-text-color"
                            type="email"
                            name="email"
                            onChange={onEmailChange}
                        />
                        <label className="form-text form-text-color">
                            GitHub Account
                        </label>
                        <input
                            className="signin-input apply-input form-text-color"
                            type="text"
                            name="github-account-name"
                            onChange={onGithubNameChange}
                        />

                        <label className="form-text form-text-color">
                            What developer role do you prefer?
                        </label>
                        <div className="radio-buttons form-text-color" >
                            <input type="radio" value="front-design" name="stack"/>Front-End/Design
                            <input type="radio" value="back" name="stack"/>Back-End
                            <input type="radio" value="full" name="stack"/>Full-Stack
                        </div>

                        <label className="form-text form-text-color">
                            Tech Stacks you are familiar with
                        </label>
                        <textarea
                            className="signin-input apply-input text-area form-text-color"
                            type="text"
                            name="techStack"
                            placeholder="Ex.: Javascript, Node.js etc."
                            onChange={onTextChange}
                        />

                        <label className="form-text form-text-color">
                            Why do you want to join TeamBuild?
                        </label>
                        <textarea
                            className="signin-input apply-input signin-input text-area form-text-color"
                            type="text"
                            name="joinReason"
                            onChange={onTextChange}
                        />

                        <div className="apply-button center">
                            <a
                                className="cta-button-form"
                                type="submit"
                                onClick={onSubmit}
                            >
                                Submit
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Apply
