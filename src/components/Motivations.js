import React from 'react';
import './Motivations.css';
import find_team from '../static/find_team.png';
import build from '../static/build.png';
import fast_working from '../static/fast_working.png';

const Motivations = () => {

    return(

        <div className="motiv-container">
            <div className="item-box item-box-left">
                <img className="illustration" src={find_team}/>
                <div className="text">
                    <h2>Apply and find your team</h2>
                    <p>Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla. Suspendisse faucibus.</p>
                </div>
            </div>

            <div className="item-box item-box-mid">
                <img className="illustration" src={build} />
                <div className="text">
                    <h2>Build your awesome project</h2>
                    <p>Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla. Suspendisse faucibus.</p>
                </div>
            </div>

            <div className="item-box item-box-right">
                <img className="illustration" src={fast_working} />
                <div className="text">
                    <h2>Fast forward your career</h2>
                    <p>Etiam imperdiet imperdiet orci. Donec id justo. Nunc nulla. Suspendisse faucibus.</p>
                </div>
            </div>

            <div className="motiv-button">
                <a className="prefooter__button" href="#">
                    Get Started
                </a>
            </div>
        </div>
    )
};

export default Motivations;