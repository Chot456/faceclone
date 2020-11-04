import React from 'react'
import './css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './components/MessageSender'
import Post from './components/Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/14/1aca46f0-7956-11ea-9479-e3cad17ef2b4_image_hires_120903.jpg?itok=6F3bZFCS&v=1586837348"
                message='Sample Message'
                timestamp='this is time stammp'
                username='lee min ho'
                image="https://dw9to29mmj727.cloudfront.net/properties/2016/526-SeriesThumb_OP_400x320.png "
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
