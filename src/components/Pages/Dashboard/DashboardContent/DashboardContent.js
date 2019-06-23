import React from "react"
import "./DashboardContent.css"
import add from "../../../../static/baseline-add-24px.svg"
import addPerson from "../../../../static/baseline-person_add-24px.svg"
import message from "../../../../static/baseline-message-24px.svg"

// This Component contains the sidebar navigation and other Dashboard components through composition
// using props.children.

const DashboardContent = ({ children, sideNavStyle, sideNavTextStyle }) => {
    return (
        <div className="dashboard">
            <div className="dashboard__sidebar" style={sideNavStyle}>
                <div className="dashboard__item">
                    <div className="dashboard__item__upper-menu">
                        <img className="dashboard__item__icon" src={add}></img>
                        <input type="checkbox" id="menu__click"></input>
                        <label
                            for="menu__click"
                            className="dashboard__item__text"
                            style={sideNavTextStyle}
                        >
                            New Project
                            <div className="dashboard__item__lower-menu">
                                <span className="testingthis">
                                    General info
                                </span>
                                <span className="testingthis">Tech stack</span>
                                <span className="testingthis">Add members</span>
                            </div>
                        </label>
                    </div>
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
