import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* 새로고침없이 경로에 따라서 아래의 내용이 바뀌고 있음. */}
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    {/* 없는거 훑고 들어오니까 가장 밑에 놔야한다! */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
