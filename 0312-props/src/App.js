import logo from './logo.svg';
import './App.css';
import FunctionComponenet from './FunctionComponent';

function App() {
    const name = '코딩온';
    return (
        <div className="App">
            <FunctionComponenet name={name} time="14시">
                칠드런런런
            </FunctionComponenet>
            <FunctionComponenet />
            <FunctionComponenet name={1234} />
        </div>
    );
}

export default App;
