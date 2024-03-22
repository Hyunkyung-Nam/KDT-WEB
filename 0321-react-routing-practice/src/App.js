import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DynamicPage from './pages/DynamicPage';
import StudentHeader from './components/StudentHeader';
import StudentDetail from './components/StudentDetail';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<MainPage />}></Route> */}

                    {/* <Route
                        path="/student/:name"
                        element={<DynamicPage />}
                    ></Route> */}
                    {/* 실습- 루나리더님 */}
                    <Route path="/student" element={<StudentHeader />} />
                    <Route path="/student/:name" element={<StudentDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
