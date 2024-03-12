function Clock() {
    //파일명은 동일해야하는건아니지만 특별한 경우가 아니면 파일명과 동이랗게 만든다
    //함수형 컴포넌트를 만드는 과정
    return (
        <div>
            {/* toLocaleTimeString() : 사용자의 문화권에 맞는 시간표기법으로 시간 리턴 */}
            <h1>현재 시간은{new Date().toLocaleTimeString()}입니다.</h1>
        </div>
    );
}

export default Clock;
