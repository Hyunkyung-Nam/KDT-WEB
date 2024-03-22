//중복 방지하기 위해 reducer이름을 앞에 붙인다.
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

//컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
export const plus = () => ({ type: PLUS }); // 한줄이라 return생략
export const minus = () => ({ type: MINUS });

//state 초기값 정의
const initialState = {
    number: 50,
};

//reducer 정의 : 상태 변화를 일으키는 함수
// 두번째는 dispatch에서 받아오는 값
const counterReducer = (state = initialState, action) => {
    //action은 객체 : 어떤변화인지 type으로 판단
    //{ type : "XXX", payload : 어떤값}
    switch (action.type) {
        case PLUS:
            return { number: state.number + 1 };
        case MINUS:
            return { number: state.number - 1 };
        default:
            return state;
    }
};

export default counterReducer;
