import React from 'react'

const VideoComments = (props) => {
    let comments = props.comments

    const renderComments = comments.map(comment => {
        return (
            <>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </>
        )
    })

    return (props.show ? 
        <div>
            <h1>{comments.length} Comments</h1>
            {renderComments}
        </div>
    : null)
}

export default VideoComments;
