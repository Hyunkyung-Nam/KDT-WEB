import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';
import { Container } from './Container';
// import { Circle } from './Circle';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <Container></Container>
    </React.StrictMode>
);

// Clock 렌더링
/*
setInterval(() => {
    //React Virtual DOM은 내용이 변경된 부분만 업데이트(모든게 업데이트되는 것이 아니다)
    //브라우저에서 전체가 아니라 "시간"부분만 새로고침 되고있다
    // 동적 UI가능, 새로고침하지않아도 자동으로 새로고침되고있다
    root.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>
    );
}, 1000); //1초마다 다시 그리게 해주는 거
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
