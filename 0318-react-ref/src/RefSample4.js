import { useRef, useState } from 'react';
export default function RefSample4() {
    const idRef = useRef(1);
    const [id, setId] = useState(10);
    let idVar = 20;

    const plusIdRef = () => {
        idRef.current = idRef.current + 1;
        console.log(idRef.current);
    };
    const plusIdState = () => {
        setId(id + 1);
    };

    const plusIdVar = () => {
        idVar += 1;
        console.log(idVar);
    };

    return (
        <>
            <h1>Ref Sample - 로컬 변수</h1>
            <h2>{idRef.current}</h2>
            <button onClick={plusIdRef}>plus Ref</button>

            <h2>{id}</h2>
            <button onClick={plusIdState}>plus State</button>

            <h2>{idVar}</h2>
            <button onClick={plusIdVar}>plus variable</button>
        </>
    );
}
