const SayFunction = () => {
    const alertMsg = (e, msg) => {
        alert(`${msg} 입니다.`);
        console.log(e.target);
    };
    const clicked = (e) => {
        console.log(e.target);
    };

    return (
        <div>
            {/* 함수에 인자보내기 : 화살표 함수를 이용해서 익명함수로 감싸서 처리
             */}
            <button onClick={(e) => alertMsg(e, 'msg')}>alert 출력</button>
            {/* 보낼게 없으면 e는 명시안해줘도된다. 대신 함수안에서 인자로 e받으면 된다. */}
            <button onClick={clicked}>클릭클릭</button>
        </div>
    );
};
export default SayFunction;
