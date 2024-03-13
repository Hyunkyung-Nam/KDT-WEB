import { Component } from 'react';

export default class Counter extends Component {
    state = {
        number: 0,
        name: '코딩온',
    };
    render() {
        //state는 this.state로 접근가능
        console.log(this.state);
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                {/* onClick도 amelCase */}
                <button
                    onClick={() => {
                        //this.setState() => :state값을 바꾸는 함수
                        // state값은 직접 변경은 안되고 setState를 이용해서만 변경가능
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}
