import './App.css';
import Container from './Component/Container';
import PracticeFunc from './Component/PracticeFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
    return (
        <div className="App">
            {/* 클래스형 컴포넌트 : ref사용 1. 콜백함수 */}
            <RefSample1 />
            <hr />
            {/* 클래스형 컴포넌트 : ref사용 2. createRef() */}
            <RefSample2 />
            <hr />
            {/* 클래스형 컴포넌트 ref사용 실습 */}
            <Container />
            <hr />
            {/* 함수형 컴포넌트 : ref사용 3. useRef()로 DOM요소에 접근 */}
            <RefSample3 />
            <hr />
            {/* 함수형 컴포넌트 : ref사용 4. useRef()를 로컬변수로 사용 */}
            <RefSample4 />
            <hr />
            {/* 함수형 컴포넌트 ref사용 실습 */}
            <PracticeFunc />
        </div>
    );
}

export default App;
