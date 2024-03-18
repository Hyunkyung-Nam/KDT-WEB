import React, { Component, createRef } from 'react';
import Table from './Table';

export default class Container extends Component {
    state = {
        inputTitleState: '',
        inputWritterState: '',
        boardDatas: [
            { title: '안뇽', writter: '민수' },
            { title: '하이하이', writter: '지민' },
            { title: '멋쟁이', writter: '희수' },
        ],
    };
    inputTitle = createRef();
    writeBoard = () => {
        if (this.inputWritter.value.trim().length === 0) {
            this.inputWritter.focus();
            return;
        }
        if (this.inputTitle.current.value.trim().length === 0) {
            this.inputTitle.current.focus();
            return;
        }
        const newBoardData = this.state.boardDatas.concat({
            title: this.inputTitle.current.value.trim(),
            writter: this.inputWritter.value.trim(),
        });
        this.setState({ boardDatas: [1] });
        this.inputWritter.value = '';
        this.inputTitle.current.value = '';
        console.log(this.state.boardDatas);
    };
    render() {
        const { inputTitleState, inputWritterState } = this.state;
        return (
            <div>
                <div>
                    <label htmlFor="writer">작성자 : </label>
                    <input
                        type="text"
                        id="writer"
                        ref={(ref) => {
                            this.inputWritter = ref;
                        }}
                        value={inputWritterState}
                        onChange={(e) => {
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    inputWritterState: e.target.value,
                                };
                            });
                        }}
                    />
                    <label htmlFor="title">제목 : </label>
                    <input
                        type="text"
                        id="title"
                        ref={this.inputTitle}
                        value={inputTitleState}
                        onChange={(e) => {
                            this.setState((prevState) => {
                                return {
                                    ...prevState,
                                    inputTitleState: e.target.value,
                                };
                            });
                        }}
                    />
                    <button onClick={this.writeBoard}>작성</button>
                </div>
                <Table></Table>
            </div>
        );
    }
}
