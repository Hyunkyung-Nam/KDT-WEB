import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function DynamicPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h4>
                학생의 이름은 <span style={{ color: 'green' }}>{name}</span>
                입니다.
            </h4>
            {searchParams.get('name') && (
                <h4>
                    실제 이름은{' '}
                    <span style={{ color: 'red' }}>
                        {searchParams.get('name')}
                    </span>{' '}
                </h4>
            )}
            <button onClick={() => navigate(-1)}>이전페이지로</button>
        </div>
    );
}
