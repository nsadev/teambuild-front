import React from "react"
import "./DashboardNavbar.css"
import "../../../../main.css"
import { Link } from "react-router-dom"
import Logo from "../../../Logo/Logo"
import ProfilePicture from "./DashboardPicture/DashboardPicture"
import auth from "../../../../utils/Auth"
import menu from "../../../../static/baseline-menu-24px.svg"

const DashboardNavbar = ({ user, openSideNav }) => {
    return (
        <div className="navbar dashboard-navbar">
            <div className="dashboard-container">
                <div className="dashboard__navbar__menu">
                    <button
                        className="button__without__styling"
                        onClick={openSideNav}
                    >
                        <img src={menu}></img>
                    </button>
                </div>
                <div className="dashboard__navbar__logo">
                    <Logo />
                    {auth.admin ? (
                        <div className="admin-sign purple">ADMIN</div>
                    ) : null}
                </div>
                <div className="navbar__links">
                    {// If the logged in user is an admin register option reveal
                    user.isadmin ? (
                        <Link
                            className="navbar__links link blue"
                            to="/register"
                        >
                            Add new member
                        </Link>
                    ) : null}

                    <Link className="navbar__links link blue" to="#">
                        Join to a team
                    </Link>

                    <Link className="navbar__links link blue" to="#">
                        Create new project
                    </Link>
                </div>
                <ProfilePicture />
                <div className="username-tag">
                    <p>
                        {user.first_name} {user.last_name}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default DashboardNavbar
