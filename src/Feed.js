import React from 'react'
import './css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './components/MessageSender'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/** Message sender */}
        </div>
    )
}

export default Feed
