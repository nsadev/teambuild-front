import React from 'react'
import "./Bio.css"

const Bio = ({user}) => {

    return(
        <div>

            <div className="user-info-field">
                <b>Role:</b>
                <p>{user.role}</p>
            </div>

            <div className="user-info-field">
                <b>Skills:</b>
                <p>{(user.skills) ? user.skills : "Please add your skills"}</p>
            </div>

            <div className="user-info-field">
                <b>Bio:</b>
                <p>{(user.bio) ? user.bio : "Please add your introduction"}</p>
            </div>

        </div>
    )
}

export default Bio