import { Component } from 'react';

export default class Counter extends Component {
    state = {
        number: 0,
    };
    render() {
        const plus = () => {
            this.setState({ number: this.state.number + 2 });
        };
        const sub = () => {
            this.setState({ number: this.state.number - 1 });
        };
        console.log('HI');
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={plus}>+2</button>
                <button onClick={sub}>-1</button>
            </div>
        );
    }
}
