let num1: number = 0; // 숫자
let str1: string = 'hi'; // 문자열
const TRUE: boolean = true; //boolean
//숫자 배열
let numbArr1: number[];
let numArr2: Array<number>;
//문자배열
let strArr1: string[];
let strArr2: Array<string>;
//여러 타입이 들어가는 배열
let variatyArr1: (number | string | object)[] = ['aa', 'bb', 0];
let variatyArr2: Array<number | boolean | string> = [true, 'hihi', 10];
//어떤 사료형이던 상관 없는 배열
let anyArr: any[];
//객체
let object: object = {
    id: '2013',
    name: '양갱',
};
//null
let nonono: null = null;
let HIHI: undefined;

let lunch: readonly [string, number];

lunch = ['salad', 5];
console.log(lunch);

enum Direction {
    Up = 3,
    Down = 5,
    Left = 7,
    Right,
}

console.log(Direction);
