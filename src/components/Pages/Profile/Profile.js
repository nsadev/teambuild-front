import React, { useState, useEffect } from "react"
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar"
import ProfileFooter from "./ProfileFooter/ProfileFooter"
import "./Profile.css"
import "../../../main.css"
import auth from '../../../utils/Auth'

const Profile = () => {
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/user")
            .then(res => res.json())
            .then(user => {
                auth.isAdmin(user)
                console.log('1.admin', auth.admin)
                setUser(user)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div> Loading </div>
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
