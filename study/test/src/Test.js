import React from 'react';
import axios from 'axios';
import { ComponentDefault } from './ComponentDefault';

export default function Test() {
    async function hello() {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res.data);
        console.log('HI');
        const res2 = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res2.data);
        console.log('HEHE');
    }
    hello();
    console.log('zzzzzzz');
    return <div></div>;
}
