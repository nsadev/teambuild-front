import React from "react"
import "./ProfileNavbar.css"
import "../../../../main.css"
import { Link } from "react-router-dom"
import Logo from "../../../Logo/Logo"
import ProfilePicture from "./ProfilePicture/ProfilePicture"
import auth from '../../../../utils/Auth'

const ProfileNavbar = ({user}) => {



    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <Logo />
                    {
                        (auth.admin)
                        ? <div className="admin-sign purple">ADMIN</div>
                        : null
                    }
                </div>

                <div className="navbar__links">

                    {
                        // If the logged in user is an admin register option reveal
                        (user.isadmin)
                            ?   <Link className="navbar__links link blue" to="/register">
                                    Add new member
                                </Link>

                            :   null
                    }

                    <Link className="navbar__links link blue" to="#">
                        Join to a team
                    </Link>

                    <Link className="navbar__links link blue" to="#">
                        Create new project
                    </Link>
                </div>

                <ProfilePicture />
                <div className="username-tag" ><p>{user.first_name} {user.last_name}</p></div>
            </div>
        </div>
    )
}
export default ProfileNavbar
