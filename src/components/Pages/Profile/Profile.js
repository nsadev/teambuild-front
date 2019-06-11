import React from 'react';
import './Profile.css';
import '../../../main.css'
import ProfileNavbar from './ProfileNavbar/ProfileNavbar'
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = () => {
    return(
        <div>
            <ProfileNavbar/>
            <ProfileFooter/>
        </div>
    )
}

export default Profile;