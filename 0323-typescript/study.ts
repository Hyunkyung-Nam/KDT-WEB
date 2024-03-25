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

let anyType: any;
anyType = 1;
anyType = 'HI';
anyType = [1, 2, 3];

console.log(anyType);

interface Student {
    name: string;
    isPassed: boolean;
}

const student1: Student = {
    name: '양갱',
    isPassed: true,
};

enum Score {
    Aplus = 'A+',
    A = 'A',
    Bplus = 'B+',
    B = 'B',
    Cplus = 'C+',
    C = 'C',
}

interface CollegeStudent extends Student {
    major: string;
    readonly id: number;
    [grade: number]: Score; // 학년 : 점수
    club?: string; // ?는 있어도 되고 없어도 됨
}

const yangGang: CollegeStudent = {
    name: '남양갱',
    major: '전자공학',
    isPassed: true,
    id: 2013,
    1: Score.A,
    2: Score.Aplus,
};

yangGang.club = 'coomroom';
//yangGang.id = "2017"; readonly로 error
console.log(yangGang);

//type
type Bp1 = 500 | 700 | 1000;

enum Bp2 {
    SM = 5000,
    MD = 7000,
    LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.LG;

//교차타입

interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발~');
    },
    color: 'blue',
    price: 10000,
};

type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender;
};

let daniel: Person = {
    name: 'daniel',
    gender: 'F',
};
