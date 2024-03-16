import { useState } from 'react';

export default function Search({ searchDataFunc }) {
    const [searchData, setSearchData] = useState({
        selected: 'writer',
        textData: '',
        isAll: false,
    });
    return (
        <div style={{ marginTop: 10 }}>
            <select
                style={{ marginRight: 10 }}
                onChange={(e) => {
                    setSearchData((prevData) => {
                        return { ...prevData, selected: e.target.value };
                    });
                }}
            >
                <option value="writer">작성자</option>
                <option value="title">제목</option>
            </select>
            <input
                type="text"
                placeholder="검색어"
                style={{ marginRight: 10 }}
                value={searchData.textData}
                onChange={(e) => {
                    setSearchData((prevData) => {
                        return { ...prevData, textData: e.target.value };
                    });
                }}
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) {
                        return;
                    }
                    if (e.key === 'Enter' && searchData.textData.trim()) {
                        searchDataFunc(searchData);
                    }
                }}
            />
            <button onClick={() => searchDataFunc(searchData)}>검색</button>
            <button
                onClick={() => {
                    setSearchData((prevData) => {
                        return { ...prevData, isAll: true };
                    });
                    searchDataFunc(searchData);
                }}
            >
                전체
            </button>
        </div>
    );
}
