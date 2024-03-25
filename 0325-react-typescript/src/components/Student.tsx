/**
 * props
 * name, grade, part, handleClick()
 */

import { useState } from 'react';

interface StudentInfo {
    name: string;
    grade: number;
    part?: string; //optional 한 props
    handleClick: (name: string, grade: number) => void;
}
export default function Student({
    name,
    grade,
    part,
    handleClick,
}: StudentInfo) {
    const [score, setScore] = useState<string>();
    //Props로 타입을 지정해주기도하도 특정한 이름이 있으면 해당이름으로 사용자지정type생성
    return (
        <div>
            <ul onClick={() => handleClick(name, grade)}>
                <li>이름 : {name}</li>
                <li>학년 : {grade}</li>
                <li>전공 : {part || '자유 전공'}</li>
                {/* 값이 없을때에는 단축평가를 이용하여 값을 넣어둘수도있음 */}
                {/* {part && <li>전공 : {part}</li>} */}
            </ul>
        </div>
    );
}
