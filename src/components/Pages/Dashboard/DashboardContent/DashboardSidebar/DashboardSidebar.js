import React from "react"
import add from "../../../../../static/baseline-add-24px.svg"
import addPerson from "../../../../../static/baseline-person_add-24px.svg"
import message from "../../../../../static/baseline-message-24px.svg"
import dropdown from "../../../../../static/baseline-keyboard_arrow_down-24px.svg"
import "./DashboardSidebar.css"

const DashboardSidebar = ({ sideNavStyle, sideNavTextStyle }) => {
    const objectArray = [
        {
            firstLevel: "New Project",
            secondLevel: ["General info", "Tech stack", "Add members"],
        },
        {
            firstLevel: "Recruit",
            secondLevel: [],
        },
        {
            firstLevel: "Messages",
            secondLevel: [],
        },
    ]

    return (
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
                        <span className="dashboard__item__dropdown-button">
                            <img src={dropdown}></img>
                        </span>
                        <div className="dashboard__item__lower-menu">
                            <span className="testingthis">General info</span>
                            <span className="testingthis">Tech stack</span>
                            <span className="testingthis">Add members</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="dashboard__item">
                <img className="dashboard__item__icon" src={addPerson}></img>
                <span
                    className="dashboard__item__text"
                    style={sideNavTextStyle}
                >
                    Recruit
                    <span className="dashboard__item__dropdown-button">
                        <img src={dropdown}></img>
                    </span>
                </span>
            </div>
            <div className="dashboard__item">
                <img className="dashboard__item__icon" src={message}></img>
                <span
                    className="dashboard__item__text"
                    style={sideNavTextStyle}
                >
                    Messages
                    <span className="dashboard__item__dropdown-button">
                        <img src={dropdown}></img>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default DashboardSidebar
