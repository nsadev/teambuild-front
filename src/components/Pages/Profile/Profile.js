
import React, {useState, useEffect} from 'react';
import './Profile.css';
import '../../../main.css'
import ProfileNavbar from './ProfileNavbar/ProfileNavbar'
import ProfileFooter from './ProfileFooter/ProfileFooter';

const Profile = ({firstname, lastname }) => {

    return(
        <div>
            <ProfileNavbar />
            <p>Hello, {firstname} {lastname} !</p>
            <ProfileFooter/>
        </div>
    )
}

export default Profile;