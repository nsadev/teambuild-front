import React, { useState, useEffect } from "react"
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar"
import DashboardFooter from "./DashboardFooter/DashboardFooter"
import DashboardContent from "./DashboardContent/DashboardContent"
import Projects from "../Projects/Projects"
import auth from "../../../utils/Auth"
import "./Dashboard.css"
import "../../../main.css"

const Profile = () => {
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(user => {
                auth.isAdmin(user)
                setUser(user)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return null
    } else {
        return (
            <div>
                <DashboardNavbar user={user} />
                <DashboardContent>
                    <Projects />
                </DashboardContent>
                <DashboardFooter />
            </div>
        )
    }
}

export default Profile
