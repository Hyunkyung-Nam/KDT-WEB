//오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태 
console.log("Object")
let cat = {
    name : "고양이",
    age : 2,
    isCute : true,
    mew:function() {
        return "야옹!";
    }
}

console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());


let person = {
    name : "홍길동",
    gender : "남자",
    addree : "서울시 마포구",
    phone : "010-1234-5678"
}

console.log(person);
console.log(person.name);
console.log(person.gender);
console.log(person.addree);
console.log(person.phone);


// typeof : 데이터가 어떤 타입인지 알려주는 키워드
// typeof 띄어쓰기 한칸하고 쓰기 
console.log(typeof ("Hello"));
console.log(typeof false);
const types = 20;
console.log(typeof types);

//형변환 : 데이터의 타입을 변환시켜 주는 것
//prompt() : 사용자에게 데이터를 입력 받게 하는 것

// let mathScroe = prompt("수학 점수를 입력 하세요");
// let engScroe = prompt("영어 점수를 입력 하세요");

// let avg = (Number(mathScroe) + Number(engScroe)) / 2;

// console.log(`점수 :${avg}`);

/*문자로 변환 String(); toString();
String() : null과  undefined에서도 문제가 발생하지 않는다
String(123456) 이렇게 넣으면 123456 문자열로 변함

toString() : null과 undefined에서 문제가 발생 */
let num=123;
console.log("");
console.log(typeof num);
console.log(String(num));
console.log(typeof num);
num=123;
console.log(typeof num);
console.log(num.toString());
console.log(typeof num);

let a = String(num);
console.log(typeof a);

let b = num.toString();
console.log(typeof b);

/* 숫자 형변환 */

console.log(Number("12345"));
console.log(Number("abc"));

/* 연산자 */

console.log("산술연산자");
console.log(1+1);
console.log(1-1);
console.log(1*5);
console.log(4/2);
console.log("");

console.log("나머지연산자");
console.log(100%2);
console.log(99%2);
console.log("");

console.log("거듭제곱연산자");
console.log(2**4);
console.log("");

let num1 = 5;
num1 += 5; //num = num+5;
console.log("연산자 줄여쓰기");
console.log(num1);
console.log("");


let result1, result2 ;
let result1Num = 10, result2Num = 10;

console.log("증가감소연산자"); //num++ 좀 더 공부 필요
console.log("result1 : " + result1);
console.log("result2 : " + result2);
console.log("result1Num : " + result1Num);
console.log("result2Num : " + result2Num);
result1 = result1Num++;
console.log("result1 = result1Num++;")
console.log("result1 : "+result1);
console.log("result1Num : "+result1Num)
console.log("");

result2 = ++result2Num;
console.log("result2 = ++result2Num;");
console.log("result2 : "+result2);
console.log("result2Num : "+result2Num)
console.log("");

result1 = result1Num++;
console.log("result1 = result1Num++;");
console.log("result1 : "+result1);
console.log("result1Num : "+result1Num)
console.log("");

let abcNumber = 123;
let abcString = "123";

console.log("일치연산자"); 
console.log(abcNumber == abcString); //t
console.log(abcNumber != abcString); //f
console.log(abcNumber === abcString); //f
console.log(abcNumber !== abcString)//t

console.log("논리연산자"); // 조건문에서 많이 사용

let name = "뽀로로";
let age = 18;
let isAdult = age > 19;

console.log("이름이 뽀로로이거나 19세를 넘었습니까?");
if(name === "뽀로로" || age > 19 ){
    console.log("통과");
} else {
    console.log("돌아가");
}
console.log("")
console.log("이름이 뽀로로이고 19세를 넘었습니까?");
if(name === "뽀로로" && age > 19 ){
    console.log("통과");
} else {
    console.log("돌아가");
}
console.log("")
console.log("19세가 넘었습니까?");
if(!isAdult){
    console.log("돌아가");
} else {
    console.log("통과");
}
// 논리연산자는 return?? 값이 boolean이다 


//Onclick - HTML요소에 속성 값으로 JS함수를 연결 (HTML을 제어하기 위해 JS배움)
function text() {
    alert("click을 누르셨습니다.");
}

let number1 = Number(prompt("첫번째 숫자를 입력하세요"));
let number2 = Number(prompt("두번째 숫자를 입력하세요"));

function add (num1, num2) {
    alert(num1 + num2);
}
function sub(num1, num2) {
    alert(num1 - num2);
}
function divide(num1, num2) {
    alert(num1 * num2);
}
function mul(num1, num2) {
    alert(num1 / num2);
}