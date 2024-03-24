//typescript basic type

//명시적으로 지정
let a: number = 1;
a = 2;
//a = "hello" // 실행을하지 않아도 에러(type error)를 실시간으로 표시
let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null;

//타입추론(암묵적으로)
let aa = 1;
//aa = "hi"; //type명시 안해줬지만 암묵적으로 추론하여 type error발생
let bb = 'hi';
let cc = false;
let dd; //  아무것도 안썼을 때는 undefined또는 any로 처리
let ee = null; // any -> typescript에서 타입을 잘 모를 때 써주고 어떠한 타입이 와도 괜찮다
//any를 많이 쓰면 typescript사용이 무의미해짐

let numArr: number[] = [1, 2, 3, 4, 5]; //number[] 이 배열에는 number만 들어올 수 있다.
//numArr = ['a','b','b'] // type error

let strArr: Array<string> = ['apple', 'banana', 'melon'];

//배열의 원소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1, true, 'string']; //또는을 이용해 이러한 타입들이 들어갈 수 있다 명시
//boolean, null , number array가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];

//어떤 자료형이든 상관없는 배열 (any는 지양해야하지만.. 그래도..)
let arr3: any[] = [1, 2, 3, 'hi', null, ['heehe'], undefined, true];

//객체
let obj1: object = {
    name: 'codingon',
    grade: 1,
};
