export default function SyntheticEvent() {
    function syntheticClick(e) {
        console.log(e);
        console.log('Synthetic Event Click');
        //콘솔에 기록되는 e 객체는 SyntheticEvent(합성이벤트)
        //react가 기본 DOM이 아니라 Virtual DOM을 사용 것처럼
        // 웹 브라우저의 nativeEvent가 아니라 nativeEvent를 감싸고있는 래퍼객체인 syntheticEvent를 사용
        //즉, 리액트에서 onClick, onChange 등등 같은 이벤트 들은 브라우저의 기본 이벤트가 아니라
        // 브라우저의 이벤트들을 포함하고 있는 리액트의 고유한 이벤트 객체
    }
    function printInputValue(e) {
        console.log(e.target.value);
    }

    return (
        <div>
            <button onClick={syntheticClick}>synthetic event 콘솔 찍기</button>
            <br />
            <br />
            <input
                type="text"
                placeholder="입력하세요"
                onChange={printInputValue}
            />
        </div>
    );
}
