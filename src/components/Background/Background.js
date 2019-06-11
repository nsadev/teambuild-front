import React from 'react';
import '../../main.css';
import Logo from '../Logo/Logo';


const Background = () => {

    return(
        <div>

            <div className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <Logo/>
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

        </div>

    )
}



export default Background;