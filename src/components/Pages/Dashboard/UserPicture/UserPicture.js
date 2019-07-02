import React from "react"
import "./UserPicture.css"
import tempPhoto from "../../../../static/carlos-muza-84523-unsplash.jpg"

const UserPicture = ({user}) => {

    return(
        <div className="img-container" >
            <img className="image" src={tempPhoto} width="300" height="300"/>
        </div>
    )
}

export default UserPicture