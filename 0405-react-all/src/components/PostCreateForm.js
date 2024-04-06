import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
export default function PostCreateForm() {
    // 게시글 작성 폼 -> react-hook-form이용예정

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const newPost = {
            id: Date.now(),
            title: data.title,
            content: data.content,
        };
        dispatch(addPost(newPost));
        navigate('/');
    };

    //useCallback
    const [input, setInput] = useState('');
    // const someFunction = () => {
    //     console.log('input : ', input);
    // };
    const someFunction = useCallback(() => {
        console.log('someFunction 실행!');
        console.log(`input :,${input}`);
        //의존성배열이 빈 값이니 처음 렌더링 될 때 만들어져서 메모이 제이션됨
        //그래서 input값은 처음값만 가지고있어서 값이 계속 빈값만 나오는 것이다
        //input이 바뀔때만 이 함수가 다시 만들어진다
    }, [input]);

    /*
    input값 변경 시 someFunction이 바뀌는 건 아니라 useEffect가 불리지 않아야하는데
    불리는 이유는 리액트에서 state 변경 시 컴포넌트는 다시 렌더링이 되기 때문이다
    => 함수형 컴포넌트 렌드링 = 함수를 다시 호출 = 함수 내부 모든 변수 초기화
    someFunction도 하나의 변수이기 때문에 (변수에 함수 객체의 메무리 주소가 할당 된 것)
    input 변경될 때 다시 렌더링 되면서 함수 객체가 새로 만들어져 또다른 메모리 주소가 생기는 것
    => useCallback을 이용해서 렌더링이 되더라도 someFunction이 바뀌지 않게 하면 됨
    */
    useEffect(() => {
        //함수형 컴포넌트의 경우 state가 변경될때 전체 컴포넌트가 다시 리랜더링됨
        //그래서 somfunction이라는 함수도 새로 만들어짐
        console.log('someFunction 변경!');
    }, [someFunction]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        {...register('title', { required: '제목은 필수' })}
                    />
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        cols="30"
                        rows="10"
                        {...register('content')}
                    ></textarea>
                </div>
                <button>작성</button>
            </form>

            <hr />

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={someFunction}>call SomeFunction</button>
        </>
    );
}
