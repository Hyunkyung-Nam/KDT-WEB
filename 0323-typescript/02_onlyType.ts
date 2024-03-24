// only typescript type

//Tuple
//순서와 개수가 있는 배열
let drink: [string, number] = ['사이다', 1000];
//모든원소에  type지정필요
drink[0] = '콜라';
drink.push('음료수'); // tuple의 한계, 원래 의도와 다르게 값이 추가가 됨

console.log(drink);

//push등을 막고 싶으면 readonly : 요소 타입 순서와 길이 고정
const drink2: readonly [string, number] = ['사이다', 2000];

//drink2.push('음료수') //readonly에는 push가 없다는 error가 남

//Enum
enum Auth { //객체처럼 열어주면된다
    admin = 0,
    user = 1,
    guest = 2,
}

enum Cafe {
    americano = '아메리카노',
    latte = '카레라떼',
}

console.log(
    'Auth.admin',
    Auth.admin,
    'Auth.user',
    Auth.user,
    'Auth.guest',
    Auth.guest
);
console.log(Auth);
console.log(Cafe, Cafe.americano, Cafe.latte);

//Enum에는 숫자 또는 문자열만 들어갈 수 있음, 값을 안쓰게 될 경우에 숫자형으로 취급해서 가장위의요소부터 0으로 할당
enum Cake {
    chocolate,
    vanilla,
    strawberry,
    cheese = '치즈케이크', //여기서 갑자기 문자열이 되더라도 위에서 순서대로 숫자가 나옴 이렇게 쓰면 enum을 쓰는 의도와 맞지않기 때문에 권장하지 않는다.
    aaa,
}
console.log(
    'Cake.chocolate',
    Cake.chocolate,
    'Cake.vanilla',
    Cake.vanilla,
    'Cake.strawberry',
    Cake.strawberry,
    'Cake.cheese',
    Cake.cheese
);

//any
//명시적으로 쓰이는경우
let val: any;

val = 'string';
val = 1;
val = [1, 2, 3];
val = {
    id: 1,
    name: 'Hk',
};
val = true;

//암묵적으로 쓰이는 경우

let val2;

val2 = 'string';
val2 = 1;
val2 = true;
val2 = [1, 2, 3];
