import { useState } from 'react';

export default function InputContent({ onClick }) {
    const [inputValue, setInputValue] = useState({
        writer: '',
        title: '',
    });
    const margin = {
        marginRight: 10,
    };
    return (
        <div>
            <form>
                <fieldset>
                    <label htmlFor="writerInput">작성자 : </label>
                    <input
                        style={margin}
                        id="writerInput"
                        type="text"
                        placeholder="작성자"
                        value={inputValue.writer}
                        onChange={(e) => {
                            setInputValue((prevValue) => {
                                return { ...prevValue, writer: e.target.value };
                            });
                        }}
                        onKeyDown={(e) => {
                            if (e.nativeEvent.isComposing) {
                                return;
                            }
                            if (
                                inputValue.writer !== undefined &&
                                e.key === 'Enter' &&
                                inputValue.writer.trim()
                            ) {
                                onClick(e, inputValue);
                            }
                        }}
                    />
                    <label htmlFor="titleInput">제목 : </label>
                    <input
                        id="titleInput"
                        style={margin}
                        type="text"
                        placeholder="제목"
                        value={inputValue.title}
                        onChange={(e) => {
                            setInputValue((prevValue) => {
                                return { ...prevValue, title: e.target.value };
                            });
                        }}
                        onKeyDown={(e) => {
                            if (e.nativeEvent.isComposing) {
                                return;
                            }
                            if (e.key === 'Enter' && inputValue.title.trim()) {
                                onClick(e, inputValue);
                            }
                        }}
                    />
                    <button onClick={() => onClick(inputValue)}>작성</button>
                </fieldset>
            </form>
        </div>
    );
}
