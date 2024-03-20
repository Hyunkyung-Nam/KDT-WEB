import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <span>Router Tutorial</span>
            {/* ul>li*2 */}
            <ul>
                {/* Link -> 경로를 바꿔줌. 컴포넌트를 바꾸는거기때문에 a태그와 다름 
                새로고침 없이 경로만 바꿔 해당하는 컴포넌트르 띄워줌
                to는 href와 동일 */}
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </header>
    );
}
