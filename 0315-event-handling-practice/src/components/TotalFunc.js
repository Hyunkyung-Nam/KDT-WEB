import { useState } from 'react';

export default function TotalFunc() {
    const [display, setDisplay] = useState({
        fruit: 'apple',
        bgColor: 'black',
        color: 'white',
        inputText: 'text',
    });
    const fruits = [
        { valueName: 'apple', text: '사과' },
        { valueName: 'banana', text: '바나나' },
        { valueName: 'peach', text: '복숭아' },
        { valueName: 'orange', text: '오렌지' },
    ];

    const colors = [
        { valueName: 'black', text: '검정' },
        { valueName: 'white', text: '하양' },
        { valueName: 'red', text: '빨강' },
        { valueName: 'orange', text: '주황' },
        { valueName: 'yellow', text: '노랑' },
        { valueName: 'green', text: '초록' },
        { valueName: 'blue', text: '파랑' },
        { valueName: 'purple', text: '보라' },
        { valueName: 'pink', text: '분홍' },
    ];
    function drawOption(isColor) {
        const options = [];
        const datas = isColor ? colors : fruits;
        for (let data of datas) {
            const option = (
                <option key={data.valueName} value={data.valueName}>
                    {data.text}
                </option>
            );
            options.push(option);
        }
        return options;
    }
    const { fruit, bgColor, color, inputText } = display;

    const changeFruit = (e) => {
        setDisplay({ ...display, fruit: e.target.value });
    };
    const changeBgColor = (e) => {
        setDisplay({ ...display, bgColor: e.target.value });
    };
    const changeColor = (e) => {
        setDisplay({ ...display, color: e.target.value });
    };
    const inputChanged = (e) => {
        setDisplay({ ...display, inputText: e.target.value });
    };
    return (
        <div>
            과일 :
            <select name="fruit" id="" onChange={changeFruit}>
                {drawOption(false)}
            </select>
            배경색 :
            <select name="bg-color" id="" onChange={changeBgColor}>
                {drawOption(true)}
            </select>
            글자색 :
            <select
                name="color"
                id=""
                onChange={changeColor}
                defaultValue={'white'}
            >
                {drawOption(true)}
            </select>
            <br />
            내용 :{' '}
            <input
                type="text"
                onChange={inputChanged}
                placeholder="내용을 입력하세요"
            />
            <br />
            <img src={`/${fruit}.png`} alt="" />
            <br />
            <span
                style={{
                    color,
                    backgroundColor: bgColor,
                }}
            >
                {inputText}
            </span>
        </div>
    );
}
