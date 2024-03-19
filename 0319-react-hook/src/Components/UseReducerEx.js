//useReducer , useState 둘 모두 상태관리 가능
//State관리가 단순하다 싶으면 useState사용하고
//복잡하다 싶으면 useReducer사용

import { useReducer } from 'react';
const initState = { value: 0 }; // 밖에서해도되고, 다른 파일에 있어도 된다
//reducer이랑 initState는 밖이나 다른 파일에 있더도된다
const reducer = (prevState, action) => {
    //두개 매개변수 사용가능하다. 기본구조
    //     INCREMENT
    // DECREMENT
    // RESET
    console.log('prevState', prevState);
    console.log('action', action);

    switch (action.type) {
        case 'INCREMENT':
            return { value: prevState.value + 1 };
        case 'DECREMENT':
            return { value: prevState.value - 1 };
        case 'RESET':
            return { value: 0 };
    }
};

export default function UseReducerEx() {
    //reducer : state를 업데이트하는 함수
    //dispatch : 액션을 발생시키는 함수(액션 : state가 어떻게 변경되어야 하는지에 대한 힌트)
    //상태를 변경시킬때 실질적으로 호출하는 함수는 dispatch, reducer는 어떻게 업데이트할지 정의해 놓는다.
    //state : 현재상태
    //initState : 초기값
    //useReducer : [state, dispatch]를 리턴함

    const [state, dispatch] = useReducer(reducer, initState);

    // const decrement = () => dispatch('DECREMENT');
    // const reset = () => dispatch('RESET');

    //객체로 추가해서 원하는 값 더 넣어줗수 있음
    const increment = () => dispatch({ type: 'INCREMENT' }); //action은 상수타입처럼 대문자로 쓰는게 일반적
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });

    return (
        <div>
            <h1>UseReducerEx</h1>
            <h2>{state.value}</h2>
            {/*initsate로 객체를 해줬기때문에 .을 찍어 접근 */}
            <button onClick={increment}>plus</button>
            <button onClick={decrement}>minus</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
