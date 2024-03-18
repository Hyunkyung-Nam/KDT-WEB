import { useRef } from 'react';

export default function PracticeFunc() {
    const inputWriterRef = useRef();
    const inputTitleRef = useRef();

    const handleFocus = () => {
        if (inputWriterRef.current.value.trim() === '') {
            inputWriterRef.current.focus();
            return;
        }
        if (inputTitleRef.current.value.trim() === '') {
            inputTitleRef.current.focus();
            return;
        }
    };

    return (
        <>
            <label htmlFor="writer">작성자 : </label>
            <input type="text" id="writer" ref={inputWriterRef} />
            <label htmlFor="title">제목 : </label>
            <input type="text" id="title" ref={inputTitleRef} />
            <button onClick={handleFocus}>작성</button>
        </>
    );
}
