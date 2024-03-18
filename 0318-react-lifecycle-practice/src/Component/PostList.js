import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostList() {
    const [fackPosts, setFackPosts] = useState([]);
    let fakePost = [];

    const getData = async () => {
        try {
            const res = await axios({
                post: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts',
            });
            fakePost = res.data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        return () => {
            setTimeout(() => {
                setFackPosts(fakePost);
            }, 2000);
        };
    }, []);
    return (
        <>
            <div className="header">Post List</div>
            {fackPosts.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                fackPosts.map((element) => {
                    return (
                        <div className="post-wrap">
                            <div key={element.id}>
                                No. {element.id} {element.title}
                            </div>
                            <div>{element.body}</div>
                        </div>
                    );
                })
            )}
        </>
    );
}
