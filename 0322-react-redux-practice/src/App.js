import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdrawal } from './store/accountReducer';

function App() {
    const inputRef = useRef();
    const money = useSelector((state) => state.account.money);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
            <input type="number" ref={inputRef} />
            <button
                onClick={() => {
                    dispatch(deposit(Number(inputRef.current.value)));
                    inputRef.current.value = '';
                }}
            >
                입금
            </button>
            <button
                onClick={() => {
                    dispatch(withdrawal(Number(inputRef.current.value)));
                    inputRef.current.value = '';
                }}
            >
                출금
            </button>
        </div>
    );
}

export default App;
