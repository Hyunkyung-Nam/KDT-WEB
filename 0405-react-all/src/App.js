import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostCreateForm from './components/PostCreateForm';

function App() {
    return (
        <div className="App">
            {/* browser 라우터를 router로 사용 */}
            <Router>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/create" element={<PostCreateForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
