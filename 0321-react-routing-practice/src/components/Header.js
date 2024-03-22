import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Link to="/">
                <h2>ReactRouter 실습</h2>
            </Link>

            <nav>
                <ul>
                    <li style={{ margin: '40px' }}>
                        <Link to="/student/kdt">학생KDT</Link>
                    </li>
                    <li style={{ margin: '40px' }}>
                        <Link to="/student/codingon">코딩온</Link>
                    </li>
                    <li style={{ margin: '40px' }}>
                        <Link to="/student/new?name=kdt3rd">searchParams</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
