import { useState } from 'react';
import BoardContentBox from './BoardContentBox';
import InputContent from './InputContent';

export default function ContainerContent() {
    const [boardData, setBoardData] = useState([]);
    const addBoardData = (e, obj) => {
        if (
            obj === undefined ||
            obj.writer.trim().length === 0 ||
            obj.title.trim().length === 0
        ) {
            alert('작성자와 제목을 모두 작성해 주세요');
            return;
        }
        e.target.blur();
        setBoardData((boardData) => {
            return boardData.concat({
                idx: boardData.length + 1,
                writer: obj.writer,
                title: obj.title,
            });
        });
        alert('등록되었습니다.');
    };
    const removeBoardData = (obj) => {
        if (!window.confirm('삭제하시겠습니까?')) {
            return;
        }
        const newboardData = boardData.filter((element) => {
            return element !== obj;
        });
        setBoardData(newboardData);
    };
    return (
        <div style={{ marginTop: 10 }}>
            <InputContent onClick={addBoardData} />
            <BoardContentBox
                boardData={boardData}
                deleteData={removeBoardData}
            />
        </div>
    );
}
