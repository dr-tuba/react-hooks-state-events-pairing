import React from 'react'
import VideoLikes from './VideoLikes';
import video from "../data/video.js";

const VideoInfo = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.views} Views<span> | Uploaded {props.createdAt}</span></p>
            <VideoLikes 
                upvotes = {video.upvotes}
                downvotes = {video.downvotes}
             />
             <br />
             <button onClick={props.toggleComments}>{props.show ? 'Hide Comments' : 'Show Comments'}</button>
        </div>
    )
}

export default VideoInfo;
