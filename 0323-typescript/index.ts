console.log('안녕');

const msg: string = '타입스크립트 배워보자!'; //:을쓰고 타입을 명시해주면된다
const num: number = 100;

console.log(msg);
console.log(num);

function sum(x: number, y: number): number {
    //단순하면 자동으로 return값을 알아차리지만 모르면 명시해주면된다
    //():타입 쓰면된다.
    //각각의 매개변수에 type을 지정해줘야한다.
    return x + y;
}

console.log(sum(10, 20));
