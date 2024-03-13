import logo from './logo.svg';
import './App.css';
import FunctionComponenet from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';

function App() {
    const name = '코딩온';
    return (
        <div className="App">
            {/* 
                함수형과 클래스형 컴포넌트 중복사용시 pro-types 하나만 뜨는 경우 발생
            */}
            <FunctionComponenet name={name} time="14시">
                칠드런런런
            </FunctionComponenet>
            <FunctionComponenet />
            <FunctionComponenet name={1234} />
            <FunctionComponenet name={[1, 2, 3]} />

            <hr />
            {/* <ClassComponent name={name}></ClassComponent> */}
            {/* <ClassComponent></ClassComponent> */}

            <hr />
            <Button link="https://www.google.com">
                <span style={{ color: 'red' }}>Google</span>
            </Button>
        </div>
    );
}

export default App;
