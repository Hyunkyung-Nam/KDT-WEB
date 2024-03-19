import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

//useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해 두었다가 필요할 때마다 함수를 재사용

export default function UseCallbackEx({ postId }) {
    const [post, setPost] = useState({});

    // [before]
    // const getPosts = async () => {
    //     console.log('data fectching...');
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     setPost(res.data);
    //     console.log(res.data);
    // };

    //[after]
    //useCallBack 훅으로 메모이제이션 -> 의존성 배열에 postId가 변경되지 않는한
    //getPost 다시호출 하지 않음 -> 필요한 순간에만 api요청 날림
    //새로 주소값이 할당되지않고 메모리에 저장되어있음
    const getPosts = useCallback(async () => {
        console.log('data fectching...');
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(res.data);
        console.log(res.data);
    }, [postId]);

    //useEffect 의존성 배열에 "함수"
    //함수의 주소의 값이 바뀌면 다시 실행하겠다라는 의미로 만든것!
    //컴포넌트가 리랜더링 된다 => 함수가 재생성된다 -> 주소값이 변경된돠.
    //주소값이 변경되면 getPost함수가 재호출
    //리랜더링되랟 주소가 바뀔것인가!
    //주소값이 바뀌는지 안바뀌는지 확인하고자 여기에 넣어놓은 것이다
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <div>
            <h1>UseCallbackEx</h1>
            {post.id ? post.title : '로딩중...'}
        </div>
    );
}
