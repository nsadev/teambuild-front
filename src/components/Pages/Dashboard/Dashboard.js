import React, { useState, useEffect } from "react"
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar"
import DashboardFooter from "./DashboardFooter/DashboardFooter"
import DashboardContent from "./DashboardContent/DashboardContent"
import Projects from "../Projects/Projects"
import auth from "../../../utils/Auth"
import "./Dashboard.css"
import "../../../main.css"
import { NONAME } from "dns"

const Profile = () => {
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [sideNavStyle, setSideNavStyle] = useState({
        "flex-basis": "65px",
    })
    const [sideNavTextStyle, setSideNavTextStyle] = useState({
        display: "none",
    })

    useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(user => {
                auth.isAdmin(user)
                setUser(user)
                setLoading(false)
            })
    }, [])

    const openSideNav = () => {
        if (sideNavStyle["flex-basis"] === "250px") {
            setSideNavStyle({
                "flex-basis": "65px",
            })
            setSideNavTextStyle({
                display: "none",
            })
            return
        }
        setSideNavStyle({
            "flex-basis": "250px",
        })
        setSideNavTextStyle({
            display: "inline",
        })
    }

    if (loading) {
        return null
    } else {
        return (
            // All components for the dashboard should be rendered in the DashboardContent Component.
            <div>
                <DashboardNavbar openSideNav={openSideNav} user={user} />
                <DashboardContent
                    sideNavStyle={sideNavStyle}
                    sideNavTextStyle={sideNavTextStyle}
                >
                    <Projects />
                </DashboardContent>
                <DashboardFooter />
            </div>
        )
    }
}

export default Profile
