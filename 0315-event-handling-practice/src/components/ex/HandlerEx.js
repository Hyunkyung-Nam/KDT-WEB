import { Component } from 'react';
export default class HandlerEx extends Component {
    state = {
        msg: 'Hello World!',
    };
    changeMessage = (msg) => {
        this.setState({ msg: msg });
    };
    render() {
        const { msg: message } = this.state;
        return (
            <div>
                {' '}
                <h1>{message}</h1>
                <button onClick={() => this.changeMessage('Goodbye World!')}>
                    출력
                </button>
            </div>
        );
    }
}
