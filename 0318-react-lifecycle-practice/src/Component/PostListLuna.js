import React, { useEffect, useState } from 'react';
import PostItemLuna from './PostItemLuna';
import axios from 'axios';

export default function PostListLuna() {
    const [posts, setPosts] = useState([]);

    //로컬변수에 넣어놓고 호출
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPosts(fakePosts);
    //     }, 2000);
    // }, []);

    //api호출해서 처리
    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            console.log(res.data);
            setPosts(res.data.slice(0, 10));
        };

        setTimeout(() => {
            getPosts();
        }, 2000);
    }, []);
    return (
        <div>
            <header>Post List</header>
            {posts.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                posts.map((post) => {
                    return <PostItemLuna key={post.id} post={post} />;
                })
            )}
        </div>
    );
}
