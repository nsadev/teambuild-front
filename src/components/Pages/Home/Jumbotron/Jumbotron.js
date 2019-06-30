import React, { Fragment } from "react"
import "./Jumbotron.css"
import "../../../../main.css"
import GetStartedButton from "../../../GetStartedButton/GetStartedButton"

const Jumbotron = () => (
    <Fragment>
        <div className="rectangle-container">
            <div className="rectangle rectangle-1" />
            <div className="rectangle rectangle-2" />
            <div className="rectangle rectangle-small" />
            <div className="rectangle rectangle-3" />
            <div className="rectangle rectangle-4" />
        </div>
        <div className="jumbo-container">
            <div className="jumbotron">
                <div className="jumbo-title jumbo">
                    <h2>Build something <ins>awesome</ins>.</h2>
                </div>
                <p className="jumbo-text jumbo">
                Want to start contributing to open source or looking for a team for a pet project? 
                <span className="jumbo-bold"> Teambuild is your answer.</span>
                <br></br>
                Sign up and gain experience working with teams from all over the world!
                </p>
                <div>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    </Fragment>
)

export default Jumbotron
