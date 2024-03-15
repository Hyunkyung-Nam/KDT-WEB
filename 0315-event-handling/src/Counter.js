import { useState } from 'react'; // 이거 써야지 된다!!!!

export default function Counter() {
    const [number, setNumber] = useState(0); //state사용할 변수이름, state값을 변경할 함수이름
    const increase = () => {
        setNumber(number + 1);
    };
    const alertMsg = (msg) => {
        alert(`${msg}~ 현재 숫자는 ${number}`);
    };
    const alertMsg2 = (e, msg) => {
        alert(`${msg}~ 현재 숫자는 ${number}`);
    };
    const handleEvent = (e) => {
        console.log('e.target', e.target);
        console.log('e.currentTarget', e.currentTarget);
        /**
         * e.currentTarget : 이벤트 핸들러가 있는 요소 //버튼에 onclick이벤트를 부착을해놓았기 때문에 currentTarget은 버튼임
         * e.Target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치 // 내가 클릭한 자식 요소
         */
    };
    return (
        <div>
            <h1>Function Componenet Event</h1>
            <h2>{number}</h2>

            {/* 함수에 인자가 없는 경우 - 함수 이름만 전달 */}
            <button onClick={increase}>더하기</button>
            {/* 함수에 인자 보내기 - 익명함수로 감싸서 처리 */}
            <button onClick={() => alertMsg('hello')}>alert 출력</button>
            <button onClick={(e) => alertMsg2(e, 'hello')}>alert 출력</button>

            {/* e.target vs e.currentTarget */}
            <button onClick={handleEvent}>
                <span>Handle Event</span>
            </button>
        </div>
    );
}
