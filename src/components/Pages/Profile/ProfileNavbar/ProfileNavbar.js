import React from 'react';
import '../../../../main.css'
import {Link} from "react-router-dom";
import Logo from '../../../Logo/Logo'


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
                            Suggest project idea
                        </Link>
                    </div>

                    {/*User profile component here*/}

                </div>
            </div>



    )

}
export default ProfileNavbar;