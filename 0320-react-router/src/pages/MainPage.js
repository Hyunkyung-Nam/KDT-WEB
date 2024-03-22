import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
    const [seachParams, setSearchParams] = useSearchParams();
    // 첫번째가 쿼리스트링 변수 , 두번째는 쿼리스트링을 설정할 수 있는 함수
    console.log('seachParams', seachParams.get('mode')); //null or dark
    /**
     * 기본경로 / 일때는 null
     * 쿼리스트링으로 /?mode=dark => dark로 나옴
     */
    return (
        //join()의 경우에 null은 포함하지 않음
        <div className={['Main', seachParams.get('mode')].join()}>
            <h1>HOME</h1>
            <button
                onClick={() => {
                    //key,value로 객체형태로 넣어주면된다.
                    setSearchParams({ mode: 'dark' });
                }}
            >
                Dark Mode
            </button>
        </div>
    );
}
