import React, {useState} from 'react';
import './Apply.css';
import '../../../main.css';
import Logo from '../../Logo/Logo';
import {Link} from 'react-router-dom';
import Background from '../../Background/Background';


const Apply = (props) => {
   
   
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ textArea, setTextArea] = useState("");
    const [githubName, setGithubName] = useState("");

    function onEmailChange(e) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }

    function onTextChange(e) {
        setTextArea(e.target.value);
    }

    function onGithubNameChange(e) {
        setGithubName(e.target.value);
    }

    function onSubmit() {
            fetch('http://localhost:5000/apply', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                email,
                password,
                githubName,
                textArea
              })
            })
              .then(response => response.json())
    }
    




  

    return(
        <div>

          <Background/>

            <div className="template-container apply-container">

                <div className="apply-window">

                    <h1 className="center form-text-color">Apply</h1>

                    <form className="apply-form">
                        <label className="form-text-color form-text">E-mail</label>
                        <input className="apply-input form-text-color"
                               type="email"
                               name="username"
                               onChange = {onEmailChange}
                        />

                        <label className="form-text form-text-color">Password</label>
                        <input className="apply-input form-text-color"
                               type="password"
                               name="password"
                               onChange={onPasswordChange}
                        />
                        <label className="form-text form-text-color">GitHub Account</label>
                        <input className="apply-input form-text-color"
                               type="text"
                               name="github-account-name"
                               onChange= {onGithubNameChange}
                        />
                         <label className="label-text-area">Tell us about yourself</label>
                        <textarea className="text-area"
                               type="text"
                               name="github-account-name"
                               onChange= {onTextChange}
                        />



                        <div className="apply-button center">
                            <a className="cta-button-form" href="#" type="submit" onClick={onSubmit} >
                                Submit
                            </a>
                        </div>

                    </form>

                  
                </div>

            </div>

        </div>

    )
}



export default Apply;