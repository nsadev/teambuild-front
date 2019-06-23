import React from "react"
import DashboardSideBar from "./DashboardSidebar/DashboardSidebar"
import "./DashboardContent.css"

// This Component contains the sidebar navigation and other Dashboard components through composition
// using props.children.

const DashboardContent = ({ children, sideNavStyle, sideNavTextStyle }) => {
    return (
        <div className="dashboard">
            <DashboardSideBar
                sideNavStyle={sideNavStyle}
                sideNavTextStyle={sideNavTextStyle}
            />
            <div className="dashboard__content">{children}</div>
        </div>
    )
}

export default DashboardContent
