import React from 'react';
import './styles/SassComponent.scss';

export default function SassComponent() {
    return (
        //control + i 하면 감쌀수있음
        <div>
            <div className="container">
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
            </div>
            <button className="btn">Button</button>
            <button className="btn-primary">Button Primary</button>
        </div>
    );
}
