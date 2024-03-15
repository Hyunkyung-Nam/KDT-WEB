import { Component } from 'react';
export default class ChangeColorLuna extends Component {
    state = {
        color: 'black',
        text: '검정색',
    };
    setColor = (target, color) => {
        this.setState({ color, text: target.innerText });
    };
    render() {
        const { color, text } = this.state;
        return (
            <div>
                <h1 style={{ color }}>{text} 글씨</h1>
                <button onClick={(e) => this.setColor(e.target, 'red')}>
                    빨간색
                </button>
                <button onClick={(e) => this.setColor(e.target, 'blue')}>
                    파란색
                </button>
            </div>
        );
    }
}
