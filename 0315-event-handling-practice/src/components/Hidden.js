import { useState } from 'react';

export default function Hidden() {
    const [status, setStatus] = useState('show');

    const changeStatus = () => {
        status === 'show' ? setStatus('hidden') : setStatus('show');
    };

    return (
        <div>
            <button onClick={changeStatus}>
                {status === 'show' ? '사라져라' : '보여라'}
            </button>
            <h1>{status === 'show' ? '안녕하세요' : ''}</h1>
        </div>
    );
}
