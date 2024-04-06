# useState vs useReducer vs react-redux

-   공통점 : 상태관리는 위해 사용한다
-   useState, useReducer : 리액트 기본 제공 기능
-   react- redux : 외부 라이브러리

## useState

-   선언된 컴포넌트 안에서만 상태관리 가능
-   독립적인 상태값을 관리 할 때 사용

## useReducer

-   state의 형태가 복잡할 때 주로 사용(객체안에 객체가있다던가 배열이라던가)
-   여러 상태값이 서로 의존성을 갖고 있을 때 적합
-   업데이트 로직을 컴포넌트 외부로 분리하여 가독성 향상
-   용어 정리
    -   reducer <br>
        : state를 업데이트 하는 함수
    -   dispatch <br>
        : 액션을 발생시키는 함수
    -   action <br>
        : state가 어떻게 변경되어야하는지에 대한 힌트
    -   state <br>
        : 상태

## react-redux

-   외부 상태관리 라이브러리
-   전역 상태 관리가 가능해짐에 따라 props-drilling 해결할 수 있음
-   구조가 복잡한 상태관리에 효과적으로 사용 됨
-   용어정리
    -   기본적으로 useReducer에서 사용 하는 용어 뜻과 동일 함
        <br>
    -   stroe <br>
        : 전체 프로젝트에 하나의 store가지고있음. 전역으로 상태를 관리하는 공간
    -   useSelector <br>
        : store에 상태를 조회하는 Hook
    -   useDispatch <br>
        : 액션 생성 Hook, 액션과 변경할 내용을 넘겨줄 수 있음
