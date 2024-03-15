import { useState } from 'react';

export default function ChangeColor() {
    const [colorName, setColorName] = useState('검정색');
    const [color, setColor] = useState('black');

    const changeColorRed = () => {
        setColor('red');
        setColorName('빨간색');
        console.log(color);
    };
    const changeColorBlue = () => {
        setColor('blue');
        setColorName('파란색');
        console.log(color);
    };

    return (
        <div>
            <h1 className={color}>{colorName} 글씨</h1>
            <button onClick={changeColorRed}>빨간색</button>
            <button onClick={changeColorBlue}>파란색</button>
        </div>
    );
}
