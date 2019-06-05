import React from 'react';
import './SignIn.css'
import '../Jumbotron/Jumbotron.css'
import '../../main.css';
import '../Navbar/Navbar.css';
import logo_text from '../../static/logo_text.png';


const SignIn = () => {

    return(
        <div>

            <div className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <img alt="TeamBuild logo" className="logo" src={logo_text} />
                    </div>
                </div>
            </div>

            <div>
                <div className="rectangle rectangle-1" />
                <div className="rectangle rectangle-2" />
                <div className="rectangle-small" />
                <div className="rectangle rectangle-3" />
                <div className="rectangle rectangle-4" />
            </div>

            <div className="signin-container">

                <div className="signin-window">

                    <h1 className="center form-text-color">Sign In</h1>
                    <form className="signin-form">
                        <div className="form-text-color form-text">E-mail</div>
                        <input className="signin-input form-text-color" type="email" name="username"/>
                        <br/>
                        <div className="form-text form-text-color">Password</div>
                        <input className="signin-input form-text-color" type="password" name="password"/>

                        <div className="signin-button center">
                            <a className="cta-button-form" href="#" >
                                Sign In
                            </a>
                        </div>

                    </form>

                    <div className="center form-text-color signin-footer">
                        Don't have an account? <a href="#">Apply</a>
                    </div>

                </div>

            </div>

        </div>



    )
}

export default SignIn;