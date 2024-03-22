import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/couterReducer';
import { createStore } from 'redux'; // strore  만들던 이전방법이다.
import { Provider } from 'react-redux';
import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';
import App2 from './App2';
import App3 from './App3';
import { composeWithDevTools } from '@redux-devtools/extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store 정의 -> 전역으로 상태를 관리하는 공간(상태, reducer존재)
// 하나의 프로젝트에 한개만 존재
// const store = createStore(counterReducer); // deprecated
// 어떤걸로 만들지 store 정의 필요
/** store만 들때 reducer만들어놓고 넣어야한다
 */

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// composeWithDevTools : 확장 프로그램 사용하는 것
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App3 />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
