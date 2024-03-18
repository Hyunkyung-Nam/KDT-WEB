import { useRef } from 'react';
export default function RefSample3() {
    //1. ref 객체 만들기
    const inputRef = useRef(); //()에 넣을수도있고 안넣을수도있고 /초기화 할수도안할수도
    const handleFocus = () => {
        console.log('inputRef.current', inputRef.current);
        inputRef.current.focus();
    };
    return (
        <>
            <p>(함수형 컴포넌트) 버튼 클릭시 input focus 처리</p>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>focus</button>
        </>
    );
}
