import React from 'react';
import '../../../../main.css'
import {Link} from "react-router-dom";
import Logo from '../../../Logo/Logo'
import ProfilePicture from './ProfilePicture/ProfilePicture';


const ProfileNavbar = () => {

    return(

            <div className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <Logo/>
                    </div>

                    <div className="navbar__links">
                        <Link className="navbar__links link blue" to="#">
                            Join to a team
                        </Link>

                        <Link className="navbar__links link blue" to="#">
                            Create new project
                        </Link>


                    </div>

                    <ProfilePicture />

                </div>
            </div>



    )

}
export default ProfileNavbar;