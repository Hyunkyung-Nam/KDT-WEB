import { useMemo, useState } from 'react';

//useMemo
// - memoization으로 수행한 연산값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    //임의의 큰 연산을 하는 함수
    //[before]
    const calc = () => {
        console.log('열심히 계산중');
        for (let i = 0; i < 10000000; i++) {}
        return count ** 2;
    };

    //[after]
    //count의 값이 바뀔때 만 함수를 실행
    const calcUseMemo = useMemo(() => {
        console.log('count만 열심히 계산중');
        for (let i = 0; i < 10000000; i++) {}
        return count ** 2;
    }, [count]);

    return (
        <div>
            <h1>UseMemoEx</h1>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>count : {count}</div>

            {/* state가 변경되면 calc()가 계속 호출이 된다 count랑상관없이 input이 변경되어도 호출 */}
            {/* before */}
            <div>calc : {calc()}</div>
            {/* after */}
            <div>calc : {calcUseMemo}</div>
        </div>
    );
}
