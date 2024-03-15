import { Component } from 'react';

export default class Total extends Component {
    state = {
        fruit: 'apple',
        bgColor: 'black',
        color: 'white',
        inputText: 'text',
    };
    changeFruit = (e) => {
        this.setState({ fruit: e.target.value });
    };
    changeBgColor = (e) => {
        this.setState({ bgColor: e.target.value });
    };
    changeColor = (e) => {
        this.setState({ color: e.target.value });
    };
    inputChanged = (e) => {
        this.setState({ inputText: e.target.value });
    };
    render() {
        const { fruit, bgColor, color, inputText } = this.state;
        return (
            <div>
                <div>
                    과일 :
                    <select name="fruit" id="" onChange={this.changeFruit}>
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="peach">복숭아</option>
                        <option value="orange">오렌지</option>
                    </select>
                    배경색 :
                    <select name="bg-color" id="" onChange={this.changeBgColor}>
                        <option value="black">검정</option>
                        <option value="white">하양</option>
                        <option value="red">빨강</option>
                        <option value="oragne">주황</option>
                        <option value="yellow">노랑</option>
                        <option value="green">초록</option>
                        <option value="blue">파랑</option>
                        <option value="purple">보라</option>
                        <option value="pink">분홍</option>
                    </select>
                    글자색 :
                    <select name="color" id="" onChange={this.changeColor}>
                        <option value="black">검정</option>
                        <option value="white">하양</option>
                        <option value="red">빨강</option>
                        <option value="oragne">주황</option>
                        <option value="yellow">노랑</option>
                        <option value="green">초록</option>
                        <option value="blue">파랑</option>
                        <option value="purple">보라</option>
                        <option value="pink">분홍</option>
                    </select>
                    <br />
                    내용 :{' '}
                    <input
                        type="text"
                        onChange={this.inputChanged}
                        placeholder="내용을 입력하세요"
                    />
                    <br />
                    <img src={`/${fruit}.png`} alt="" />
                    <span
                        style={{
                            color,
                            backgroundColor: bgColor,
                        }}
                    >
                        {inputText}
                    </span>
                </div>
            </div>
        );
    }
}
