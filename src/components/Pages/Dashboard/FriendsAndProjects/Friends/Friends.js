import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Friends.css'
import '../../../../../main.css'


const Friends = () => {

    const [friends, setFriends] = useState(null)

    useEffect(() => {
        fetch("/user/friends")
            .then(res => res.json())
            .then(user => {
                setFriends(user)
            })
    }, [])

    return (
        <div className='friends-container'>

            <div className='friends-title'>
                <div className='title-title'>Friends</div>
                <Link className='title-expand link blue' to='#'>view all</Link>
            </div>

            <div className='friends-list'>
                {
                    (friends !== null)
                    ? friends.map( friend => (
                        <Link className='friend-avatar' key={friend.friend_id} to='#'>
                            {friend.first_name} {friend.last_name}
                        </Link>
                        ))
                    : <p>You dont have any friends yet</p>

                }
            </div>
        </div>
    )
}

export default Friends