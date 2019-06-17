import React, { useState, useEffect } from "react"
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar"
import ProfileFooter from "./ProfileFooter/ProfileFooter"
import "./Profile.css"
import "../../../main.css"

const Profile = () => {
    return (
        <div>
            <ProfileNavbar />
            <p>Hello, !</p>
            <ProfileFooter />
        </div>
    )
}

export default Profile
