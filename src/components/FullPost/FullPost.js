import React from 'react';

import './FullPost.css';

const FullPost = (props) => {
    let post = <p>Please select a Post!</p>;
    post = (
        <div className="FullPost">
            <h1>{props.selectedPost.title}</h1>
            <p>{props.selectedPost.content}</p>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
        </div>
    )
    return post
}

export default FullPost;