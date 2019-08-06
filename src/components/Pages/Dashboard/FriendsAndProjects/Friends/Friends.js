import React, { useState, useEffect } from 'react'
import './Friends.css'
import auth from "../../../../../utils/Auth"

const Friends = () => {

    const [friends, setFriends] = useState(null)

    useEffect(() => {
        fetch("/user/friends")
            .then(res => res.json())
            .then(user => {
                setFriends(user)
                console.log(user)
            })
    }, [])

    return (
        <div className='friends-container'>

            <div className='friends-title'>
                <h4>Friends</h4>
                <span>view all</span>
            </div>

            <div className='friends-list'>
                {
                    (friends !== null)
                    ? friends.map( friend => (
                        <div className='friend-avatar' key={friend.friend_id}>
                            {friend.first_name}
                            {friend.last_name}
                        </div>
                        ))
                    : <p>You dont have any friends yet</p>

                }
            </div>
        </div>
    )
}

export default Friends