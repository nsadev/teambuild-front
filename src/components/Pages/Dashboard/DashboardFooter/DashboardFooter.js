import React from "react"
import "./DashboardFooter.css"

const ProfileFooter = () => {
    const year = new Date().getFullYear()

    return (
        <div className="p-footer center">
            <h3>Made by community development</h3>
            <p>Copyright &copy; {year} </p>
        </div>
    )
}

export default ProfileFooter
