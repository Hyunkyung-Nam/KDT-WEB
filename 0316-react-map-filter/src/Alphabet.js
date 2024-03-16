import { useState } from 'react';
export default function Alphabet() {
    const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
    const [alphabet2, setAlphabet2] = useState([
        {
            id: 1,
            alpha: 'k',
        },
        {
            id: 2,
            alpha: 'i',
        },
        {
            id: 3,
            alpha: 'w',
        },
        {
            id: 4,
            alpha: 'i',
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    const [alpha, setAlpha] = useState([]); //단축평가용

    const addAlpha = () => {
        //[퀴즈] input이 빈값이라면 alphabet2 상태가 변경되지 않도록 하기
        //띄어쓰기만해도 들어가지않게하지
        if (inputAlpha.trim() === '') {
            setInputAlpha('');
            return;
        }
        // 객체배열 alphabet2에 inputAlpha내용 추가
        const newAlpha = alphabet2.concat({
            id: alphabet2.length + 1,
            alpha: inputAlpha,
        });
        setAlphabet2(newAlpha);
        setInputAlpha(''); //추가 된 이후에 초기화 시켜 없애줌
    };
    const handleKeyDown = (e) => {
        //[퀴즈] 엔터 입력하면 추가되도록
        // key, code, keyCode등을 이용해서 하면된다
        // e.code === "Enter"
        // e.key === "Enter"
        // e.keyCode === 13
        //한가지 버그가있음 만약 한글로 치면 문제가 발생해야하는데.. ㅎㅎ
        // bug fix : IME문제 해결(한글로 칠 때 마지막 한글자가 더 나옴)
        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.key === 'Enter') {
            addAlpha();
        }
    };

    const deleteAlpha = (id) => {
        console.log(id);
        const newAlpha = alphabet2.filter((alphabet) => {
            return alphabet.id !== id;
        });
        setAlphabet2(newAlpha);
    };

    //map은 배열에서 쓰는 함수, 새로 배열을 반환해준다
    const alphabets = alphabet.map((txt, idx, arr) => {
        // console.log('txt', txt);
        // console.log('idx', idx);
        // console.log('arr', arr);
        return txt + idx;
    });

    // console.log(alphabets);
    return (
        <div>
            <ol>
                {/* {
                    // value , element, el로 많이씀
                    alphabet.map((value, idx) => {
                        return <li key={idx}>{value}</li>;
                    })
                }
                <br />
                {
                    //return 생략 가능할 때! : 한줄일 때만 생략가능하다 , 중괄호대신 ()로 쓴다
                    alphabet.map((value, idx) => (
                        <li key={idx}>{value}</li>
                    ))
                }
                <br /> */}

                {alphabet2.map((element) => {
                    return (
                        <li
                            key={element.id}
                            onDoubleClick={() => deleteAlpha(element.id)}
                        >
                            {element.alpha}
                        </li>
                    );
                })}
                <br />
            </ol>

            {/* value에 inputAlpha로 고정해놨기 때문에(값을 넣어주면) 칠수없다.  
                내가 타자로 치는 값이 반영되게끔 넣어야한다.
            */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                onBlur={addAlpha}
            ></input>
            <button onClick={addAlpha}>Add</button>
            <br />
            {/* 단축 평가 */}
            {inputAlpha.length === 0 && <span>알파벳을입력해주세요</span>}
            <br />
            {null || <span>정의된 값이 없어요!</span>}
        </div>
    );
}
