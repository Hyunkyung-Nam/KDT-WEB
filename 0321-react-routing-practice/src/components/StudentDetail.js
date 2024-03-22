import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function StudentDetail() {
    console.log('useParams', useParams()); //{name : '~'}

    const { name } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    return (
        <div>
            <h5>
                학생의 이름은 <span style={{ color: 'green' }}>{name}</span>
            </h5>
            {searchParams.get('name') && (
                <h5>
                    진짜 이름은{' '}
                    <span style={{ color: 'red' }}>
                        {searchParams.get('name')}
                    </span>
                </h5>
            )}
            <button onClick={() => navigate(-1)}>이전페이지</button>
        </div>
    );
}
