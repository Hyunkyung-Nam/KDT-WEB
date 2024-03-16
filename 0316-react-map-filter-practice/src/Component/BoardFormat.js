import Board from './Board';

export default function BoardFormat({ boardData, deleteData }) {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardData.map((element, idx) => {
                        return (
                            <Board
                                idx={idx}
                                deleteData={deleteData}
                                boardData={element}
                            ></Board>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
