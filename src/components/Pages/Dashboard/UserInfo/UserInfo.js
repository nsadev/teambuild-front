import React from "react"
import Name from "./Name/Name"
import Bio from "./Bio/Bio"

const UserInfo = ({user}) => {

    return(
        <div style={{width: '800px'}} >
            <Name user={user} />
            <Bio user={user} />

        </div>
    )
}

export default UserInfo