import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Post.css'

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar 
                    src={profilePic} 
                    className="post__avatar" 
                />
            </div>
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>Timmestamp..</p>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Post
