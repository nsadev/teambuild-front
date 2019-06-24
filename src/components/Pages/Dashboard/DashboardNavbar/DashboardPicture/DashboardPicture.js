import React, { useState } from "react"
import { Link } from "react-router-dom"
import auth from "../../../../../utils/Auth"
import "./DashboardPicture.css"

/* Props list:

userImg, userName => user data
userSettings => link to the user settings action/page
userLogout => link to the user logout action/page
userSignedIn => User logged in state. Module only shown on 1, is set to 0 on logout
*/

const DashboardPicture = ({ userImg, userSettings, userLogout }) => {
    const [hover, setHover] = useState(0)
    const [SignedIn, setSignedIn] = useState(auth.isAuthenticated())

    const userMouse = e => {
        setHover(e)
    }
    const signedIn = e => {
        // Deleting a key-value pair in localStorage. This is to remove the Loading Icon.
        localStorage.removeItem("teambuild")
        auth.logout(window.location.assign("http://localhost:3000/signin"))
    }

    return (
        <div>
            <div className={`userNav ${SignedIn === 0 && "hidden"}`}>
                <div
                    className="userNav__img-wrapper"
                    onMouseEnter={() => userMouse(1)}
                    onMouseLeave={() => userMouse(0)}
                >
                    <img
                        className="userNav__img-wrapper__img"
                        src="http://true-education.org/wp-content/uploads/2015/10/facebook-profile-picture-unknown-facts-about-facebook.jpg"
                        alt="user profile"
                        onMouseEnter={() => userMouse(1)}
                    />
                </div>
                <div
                    className={`subMenu ${hover === 0 && "hidden"}`}
                    onMouseEnter={() => userMouse(1)}
                    onMouseLeave={() => userMouse(0)}
                >
                    <Link className="link" to={userSettings}>
                        <a className="" href="#">
                            Account settings
                        </a>
                    </Link>
                    <Link className="link" to={userLogout}>
                        <a className="" href="#" onClick={() => signedIn()}>
                            Logout
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardPicture
