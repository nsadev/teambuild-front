import React, { useState, useEffect } from "react"
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar"
import ProfileFooter from "./ProfileFooter/ProfileFooter"
import auth from "../../../utils/Auth"
import loader from "../../../static/loader.svg"
import "./Profile.css"
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
        return <img class="loader" src={loader} alt="Loading"></img>
    } else {
        return (
            <div>
                <ProfileNavbar user={user} />
                <p>
                    Hello, {user.first_name} {user.last_name}!
                </p>
                <ProfileFooter />
            </div>
        )
    }
}

export default Profile
