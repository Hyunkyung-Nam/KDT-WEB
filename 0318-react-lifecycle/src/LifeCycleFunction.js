import { useState } from 'react';
import LifeCycleFunctionChild from './LifeCycleFunctionChild';

export default function LifeCycleFunction() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const chnageNumber = () => {
        setNumber(number + 1);
    };
    const changeVisible = () => {
        setVisible(!visible);
    };
    return (
        <>
            <button onClick={chnageNumber}>PLUS</button>
            <button onClick={changeVisible}>ON/OFF</button>
            {visible && <LifeCycleFunctionChild number={number} />}
        </>
    );
}
