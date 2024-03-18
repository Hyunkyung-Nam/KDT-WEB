import { Component } from 'react';

export default class Table extends Component {
    render() {
        return (
            <>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </>
        );
    }
}
