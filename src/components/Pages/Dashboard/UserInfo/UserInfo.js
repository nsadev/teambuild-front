import React from "react"
import Name from "./Name/Name"

const UserInfo = ({user}) => {

    return(
        <div>
            <Name user={user} />

        </div>
    )
}

export default UserInfo