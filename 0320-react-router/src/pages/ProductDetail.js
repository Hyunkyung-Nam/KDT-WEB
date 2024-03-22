import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { productInfos } from '../components/ProductList';

export default function ProductDetail({ products }) {
    const { productId } = useParams(); //url 파라미터에 넣은 값으로 객체구조분해할당함
    console.log('useParams', useParams()); //문자열로 가져왔는데
    console.log('productId', productId);
    const targetProduct = products[Number(productId) - 1]; // 숫자와의 계산으로 알아서 숫자로 바꿔줌
    //type이 명확한 typescript등을 쓴다면 타입 변환해줘야함

    const { id, name, email, body } = targetProduct;

    const navigate = useNavigate();

    return (
        <div>
            <h1>ProductDetail</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 이동하기</button>
            <ul>
                <li>상품번호 : {id}</li>
                <li>상품명 : {name}</li>
                <li>판매자 : {email}</li>
                <li>상세 설명 : {body}</li>
            </ul>
        </div>
    );
}
