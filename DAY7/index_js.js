//alert("링크방식");

var name = "홍길동";

console.log(name);

var name = "나비";

console.log(name);

var age; //값이 할당되지 않을 때는 undefined로 할당됨
console.log(age);

age = 10; // 값을 재 할당 가능
console.log(age);

age = 50; 
console.log(age);
//clg하면 console.log()뜸

let nameLet ="홍길동";
console.log(nameLet);
nameLet = "나비"
console.log(nameLet);
let ageLet;
console.log(ageLet);

// const는 꼭 대문자로 사용하자!
const HELLO="hello";
console.log(HELLO);

//데이터 타입
let myName = "남현경";
let email = "dim3416@naver.com";
let city = "SEOUL";

console.log(myName,email,city);
console.log("안녕하세요 저는 " +myName + "입니다"); // 이건 예정방법
console.log(`안녕하세요 ${email}`);//백틱 -> ` 영문일때 1번 옆에 기호 누르면 된다!!!

let number = 123;
console.log(number);

const CHECKED = true;
const ISSHOW = false;

console.log(CHECKED, ISSHOW)

let noData = undefined;
console.log(noData);

let emptyData = null; //null 소문자로 써야함
console.log(emptyData);

let colors = ["red","orange","yellow","green"];
console.log(colors[0],colors[1], colors[2], colors[3]);
colors.push("blue");
console.log(colors)
console.log(colors.length)
colors.pop();
console.log(colors)
colors.unshift("navy");
console.log(colors);
colors.shift();
console.log(colors)
console.log(colors.indexOf("orange"));
console.log(colors.indexOf("blue")); //없는 값은 -1로 나옴
console.log(colors.includes("blue"));
console.log(colors.includes("orange"));
console.log(colors.reverse());//배열값 반전
console.log(colors)