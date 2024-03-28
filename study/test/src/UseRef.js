import React, { useRef, useState } from 'react';

export default function UseRef() {
    const num = useRef(0);
    const [numState, setnumState] = useState(0);

    return (
        <div>
            <h1>UseRef</h1>
            <span>state : {numState} </span>
            <br />
            <span>ref : {num.current} </span>
            <br />

            <button
                onClick={() => {
                    num.current += 1;
                    console.log('현재 ref값 : ', num.current);
                    setnumState(numState + 1);
                }}
            >
                +
            </button>
        </div>
    );
}
