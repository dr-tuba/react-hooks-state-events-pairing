import React from 'react'
import { useState } from 'react';

const VideoLikes = (props) => {
    const [upvotes, setUpvotes] = useState(props.upvotes)
    const [downvotes, setDownvotes] = useState(props.downvotes)
    
    return (
        <div>
            <button onClick = {() => setUpvotes(upvotes + 1)}>{upvotes}👍</button>
            <button onClick = {() => setDownvotes(downvotes + 1)}>{downvotes}👎</button>
        </div>
    )
}

export default VideoLikes
