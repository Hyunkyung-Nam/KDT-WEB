import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import './App.css';
import Counter from './Counter';

function App() {
    return (
        <div className="App">
            <SyntheticEvent />
            <hr />
            <ClassBind />
            <hr />
            <Counter />
        </div>
    );
}

export default App;
