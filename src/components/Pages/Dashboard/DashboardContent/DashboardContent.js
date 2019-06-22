import React from "react"
import "./DashboardContent.css"
import add from "./baseline-add-24px.svg"
import addPerson from "./baseline-person_add-24px.svg"
import message from "./baseline-message-24px.svg"

const DashboardContent = ({ children, sideNavStyle, sideNavTextStyle }) => {
    return (
        <div className="dashboard">
            <div className="dashboard__sidebar" style={sideNavStyle}>
                <div className="dashboard__item">
                    <img className="dashboard__item__icon" src={add}></img>
                    <span
                        className="dashboard__item__text"
                        style={sideNavTextStyle}
                    >
                        New Project
                    </span>
                </div>
                <div className="dashboard__item">
                    <img
                        className="dashboard__item__icon"
                        src={addPerson}
                    ></img>
                    <span
                        className="dashboard__item__text"
                        style={sideNavTextStyle}
                    >
                        Recruit
                    </span>
                </div>
                <div className="dashboard__item">
                    <img className="dashboard__item__icon" src={message}></img>
                    <span
                        className="dashboard__item__text"
                        style={sideNavTextStyle}
                    >
                        Messages
                    </span>
                </div>
            </div>
            <div className="dashboard__content">{children}</div>
        </div>
    )
}

export default DashboardContent
