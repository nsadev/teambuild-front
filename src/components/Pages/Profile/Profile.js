import React, { useState, useEffect } from "react"
import "./Profile.css"
import "../../../main.css"
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar"
import ProfileFooter from "./ProfileFooter/ProfileFooter"

const Profile = props => {
    console.log(props)
    //   console.log(firstname);
    return (
        <div>
            <ProfileNavbar />
            <p>Hello, {props.firstname}!</p>
            <ProfileFooter />
        </div>
    )
}

export default Profile
