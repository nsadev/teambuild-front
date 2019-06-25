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
                    Build something <ins>awesome</ins>.
                </div>
                <p className="jumbo-text jumbo">
                    Are you ready to start open sourcing but lack participation?
                    Are you looking for a team for a pet project? Do you want to
                    gain experience working with teams from all over?
                </p>
                <div>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    </Fragment>
)

export default Jumbotron
