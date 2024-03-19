//자주묻는질문
import React from 'react';
import QnA from './QnA';

export default function Faq() {
    const qna = [
        { question: '1번 질문입니다', answer: '1번 대답입니다' },
        { question: '2번 질문입니다', answer: '2번 대답입니다' },
        { question: '3번 질문입니다', answer: '3번 대답입니다' },
    ];

    return (
        <div>
            <h1>custom hook (useToggle) 예제</h1>
            {qna.map((element) => {
                return <QnA qna={element} />;
            })}
        </div>
    );
}
