import React from 'react';

export default function PostItemLuna({ post }) {
    return (
        <div>
            <div>
                <span>No. {post.id}</span>
                <span>- {post.title}</span>
            </div>
            <p>{post.body}</p>
        </div>
    );
}
