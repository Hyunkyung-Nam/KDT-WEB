import { useState } from 'react';

const SayFunction = () => {
    //배열 비구조화 할당

    const [message, setMessage] = useState('welcome!');
    console.log(useState('welcome!')); // ['welcome!', f]
    // 'welcome!' : message 변수의 초기값으로 들어감
    // useState(초기값) - 숫자, 문자, 배열 등등 자유롭게 넣을 수 있음
    //message : state에서 number 처럼 선언해준 변수
    // f : setMessage() - message state 값을 바꾸는 함수

    const onClickEnter = () => {
        setMessage('안녕하세요!');
    };
    const onClickLeave = () => {
        setMessage('안녕히가세요!');
    };

    return (
        <div>
            {/* 리액트에서는 괄호가 없음! 
                - HTML : onclick="onClickEnter()"문자열 형식으로 호출문을 등록
                - JS : addEventLister('click', () => {
                })
                addEventLister('click', onClickEnter); -> 괄호없이 바로실행하지 않고 
                click이 발생하였을때 함수 호출되도록 함수이름만 넣었음
                - REACT : onClick = {onClickEnter} ()를 붙이지 않고 쓴다, 함수 바로실행안되게
            */}
            <h1>{message}</h1>
            {/* 리액트에서는 함수이름쓰고 실행을 의미하는 ()괄호를 붙이지 않는다
             */}
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    );
};

export default SayFunction;
