import { useState } from 'react';

export default function HiddenLuna() {
    // state를 사용하는 이유는 버튼을 눌렀을 때 re-rendering없이 사용하려고 한다
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button
                onClick={() => {
                    setDisplay(!display);
                }}
            >
                {display ? '사라져라' : '보여라'}
            </button>
            {/* display가 true일 때만 화면에 나오게한다. */}
            {display && <h1>안녕하세요</h1>}
        </div>
    );
}
