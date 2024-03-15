export default function Select({ setData }) {
    return (
        <div>
            과일 :
            <select
                onChange={(e) => {
                    //매개변수를 넣게되면 이전값 가져올 수 있다.
                    setData((prevData) => {
                        return { ...prevData, fruit: e.target.value };
                    });
                }}
            >
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="peach">복숭아</option>
                <option value="orange">오렌지</option>
            </select>
            배경색 :
            <select
                onChange={(e) => {
                    //매개변수를 넣게되면 이전값 가져올 수 있다.
                    setData((prevData) => {
                        return { ...prevData, background: e.target.value };
                    });
                }}
            >
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>
            글자색 :
            <select
                defaultValue={'white'}
                onChange={(e) => {
                    //매개변수를 넣게되면 이전값 가져올 수 있다.
                    setData((prevData) => {
                        return { ...prevData, color: e.target.value };
                    });
                }}
            >
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>
        </div>
    );
}
