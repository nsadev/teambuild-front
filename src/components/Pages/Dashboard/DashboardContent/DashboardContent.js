import React from "react"
import DashboardSideBar from "./DashboardSidebar/DashboardSidebar"
import add from "../../../../static/baseline-add-24px.svg"
import addPerson from "../../../../static/baseline-person_add-24px.svg"
import message from "../../../../static/baseline-message-24px.svg"
import "./DashboardContent.css"

// Use this array of objects to add new elements to the sidenav.
// You have to define three properties on an object: icon, firstLevel and secondLevel (even if empty).
// icons have to be imported first (like above) and can then be used in the object.

const sideNavObjects = [
    {
        icon: add,
        firstLevel: "New Project",
        secondLevel: ["General info", "Tech stack", "Add members"],
    },
    {
        icon: addPerson,
        firstLevel: "Recruit",
        secondLevel: ["test 1", "test 2", "test 3"],
    },
    {
        icon: message,
        firstLevel: "Messages",
        secondLevel: [],
    },
]

// This Component contains the sidebar navigation and other Dashboard components through composition
// using props.children.

const DashboardContent = ({ children, sideNavStyle, sideNavTextStyle }) => {
    return (
        <div className="dashboard">
            <DashboardSideBar
                sideNavStyle={sideNavStyle}
                sideNavTextStyle={sideNavTextStyle}
                sideNavObjects={sideNavObjects}
            />
            <div className="dashboard__content">{children}</div>
        </div>
    )
}

export default DashboardContent
