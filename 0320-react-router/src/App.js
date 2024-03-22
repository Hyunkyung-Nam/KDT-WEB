import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

function App() {
    const [products, setProducts] = useState([]);

    //props를 계속 타고타고 넘겨줘야하는거 -> 프롭스 드릴링이라고 함
    //이런것도 해결할 수 있는 방법 고민
    //app.js에서 안쓰는 데이터 가져오는거 불필요.. 어떻게하면 Product에서만 가져와서 넘겨줄수있나 고민해보기
    //context API 이런거로 값 전달 가능
    const getProducts = async () => {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/comments'
        );
        setProducts(res.data.slice(0, 10));
        console.log('products', res.data.slice(0, 10));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* 새로고침없이 경로에 따라서 아래의 내용이 바뀌고 있음. */}
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/products"
                        element={<ProductPage products={products} />}
                    />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail products={products} />}
                    />
                    {/* 없는거 훑고 들어오니까 가장 밑에 놔야한다! */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
