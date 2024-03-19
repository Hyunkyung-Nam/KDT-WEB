import logo from './logo.svg';
import './App.css';
import UseMemoEx from './Components/UseMemoEx';
import UseCallbackEx from './Components/UseCallbackEx';
import UseReducerEx from './Components/UseReducerEx';
import Faq from './Components/Faq';
import Form from './Components/Form';
import ReactHookFormPractice from './Components/ReactHookFormPractice';

function App() {
    return (
        <div className="App">
            {/* <UseMemoEx />
            <hr />
            <UseCallbackEx postId={9} />
            <hr />
            <UseReducerEx />
            <hr /> */}
            {/* custom hook */}
            <Faq />
            <hr />
            <Form />
            <hr />
            <ReactHookFormPractice />
        </div>
    );
}

export default App;
