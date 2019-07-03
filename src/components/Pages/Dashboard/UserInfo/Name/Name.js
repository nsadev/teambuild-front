import React from "react"
import "./Name.css"
import github from "../../../../../static/github_icon.png"
import linkedin from "../../../../../static/linkedin_icon.png"
import website from "../../../../../static/website_icon.png"
import pin from "../../../../../static/location_pin.svg"

const Name = ({user}) => {



    return(
        <div>

            <div className="user-name">
                <p>{user.first_name} {user.last_name}</p>
            </div>

            <div className="user-links" >
                <a href={user.github} target="_blank"
                   title={(user.github) ? "Github Page" : "Github is not available"} >
                    <img src={github} alt="Github Link" /></a>
                <a href={user.linkedin} target="_blank"
                   title={(user.linkedin) ? "Linkedin Page" : "Linkedin is not available"} >
                    <img src={linkedin} alt="Linkedin Link" /></a>
                <a href={user.website} target="_blank"
                   title={(user.website) ? "User's website" : "User's website is not available"} >
                    <img src={website} alt="Website Link" /></a>
            </div>


            <div className="location" >
                <img src={pin} alt="Location pin" />
                <ins>{(user.location) ? user.location : "Location not available"}</ins>
            </div>

            <hr></hr>


        </div>
    )
}

export default Name