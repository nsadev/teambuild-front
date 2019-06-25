import React, { useState, Fragment } from "react"
import "../../../main.css"
import "./Apply.css"
import "../SignIn/SignIn.css"

import EmptyNavbar from "../../EmptyNavbar/EmptyNavbar"

const Apply = props => {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [githubName, setGithubName] = useState(null)
    const [role, setRole] = useState(null)
    const [stack, setStack] = useState(null)
    const [joinReason, setJoinReason] = useState(null)
    const [message, setMessage] = useState(null)
    const [success, setSuccess] = useState(false)
    
    

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onNameChange(e) {
        setName(e.target.value)
    }

    function onGithubNameChange(e) {
        setGithubName(e.target.value)
    }

    function roleSelection(e) {
        setRole(e.target.value)
    }

    function onStackChange(e) {
        setStack(e.target.value)
    }

    function onJoinChange(e) {
        setJoinReason(e.target.value)
    }


    const Success = () => (
        <h3>Success!!!!!!!!!!</h3>
    );

    function onSubmit() {
        if (name && email && githubName && role && stack && joinReason) {
            try {
                fetch("/apply", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        githubName: githubName,
                        role: role,
                        stack: stack,
                        joinReason: joinReason,
                    }),
                }).then(response => response.json())
                    setSuccess(true)
                    .then(data => {
                        setMessage(data.message)
                    })

            }
            
            catch (e) {
                setMessage(e)
            }
            
        } else {
            setMessage("Every fields are mandatory")
        }

      console.log(message)
    }

    if(success ) {
        return (
            <Success/>
        );
    } else {
        return (
    <div>
        <Fragment>
            <EmptyNavbar/>
            
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
                        <input type="radio" value="Front-End/Design" name="stack"
                               onChange={roleSelection} />Front-End/Design
                        <input type="radio" value="Back-End" name="stack"
                               onChange={roleSelection} />Back-End
                        <input type="radio" value="Full-Stack" name="stack"
                               onChange={roleSelection} />Full-Stack
                    </div>

                    <label className="form-text form-text-color">
                        Technologies you are familiar with
                    </label>
                    <textarea
                        className="signin-input apply-input text-area form-text-color"
                        type="text"
                        name="techStack"
                        placeholder="Javascript, Node.js etc."
                        onChange={onStackChange}
                    />

                    <label className="form-text form-text-color">
                        Why do you want to join TeamBuild?
                    </label>
                    <textarea
                        className="signin-input apply-input signin-input text-area form-text-color"
                        type="text"
                        name="joinReason"
                        onChange={onJoinChange}
                    />

                    <div className="error-msg center"><p>{message}</p></div>

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
        </Fragment>

        
    </div>
)
  
    }

   
}






export default Apply



