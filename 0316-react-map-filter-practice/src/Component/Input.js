import { useState } from 'react';

export default function Input({ onClick }) {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
    });
    return (
        <div>
            <input
                type="text"
                placeholder="이름"
                value={inputValue.name}
                onChange={(e) => {
                    setInputValue((prevValue) => {
                        return { ...prevValue, name: e.target.value };
                    });
                }}
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) {
                        return;
                    }
                    if (e.key === 'Enter' && inputValue.name.trim()) {
                        onClick(inputValue);
                    }
                }}
            />
            <input
                type="text"
                placeholder="이메일"
                value={inputValue.email}
                onChange={(e) => {
                    setInputValue((prevValue) => {
                        return { ...prevValue, email: e.target.value };
                    });
                }}
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) {
                        return;
                    }
                    if (e.key === 'Enter' && inputValue.email.trim()) {
                        onClick(inputValue);
                    }
                }}
            />
            <button onClick={() => onClick(inputValue)}>등록</button>
        </div>
    );
}
