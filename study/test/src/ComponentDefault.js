import { useState } from 'react';

export const ComponentDefault = () => {
    const [studentInfo, setStudentInfo] = useState({
        id: '2013',
        name: '양갱',
        status: '휴학중',
    });

    const graduate = () => {
        setStudentInfo((prevState) => {
            return { ...prevState, status: '졸업' };
        });
    };
    const { id, name, status } = studentInfo;

    return (
        <div>
            <h1>State 공부</h1>
            <h3>
                {`학번 : ${id} 이름 : ${name} 상태 : ${status}`}
                {/*  */}
            </h3>
            <button onClick={graduate}>졸업</button>
        </div>
    );
};
