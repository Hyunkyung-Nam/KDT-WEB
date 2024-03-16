import { useState } from 'react';
import BoardFormat from './BoardFormat';
import Search from './Search';

export default function BoardContentBox({ boardData, deleteData }) {
    const [seachedData, setSearchData] = useState([]);
    const search = (searchData) => {
        const { selected, textData, isAll } = searchData;
        if (isAll) {
            setSearchData(boardData);
        } else {
            const newData = boardData.filter((element) => {
                return element[selected].includes(textData);
            });
            setSearchData(newData);
        }
    };
    return (
        <>
            <Search searchDataFunc={search} />
            <BoardFormat
                boardData={boardData}
                deleteData={deleteData}
            ></BoardFormat>
            {seachedData.length === 0 && <h4>검색결과가 없습니다</h4>}
            {seachedData.length !== 0 && (
                <>
                    <h4>검색결과</h4>
                    <BoardFormat boardData={seachedData}></BoardFormat>
                </>
            )}
        </>
    );
}
