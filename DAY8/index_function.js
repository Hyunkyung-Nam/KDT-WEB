//함수
//함수 선언문(기본적인 형태)
function sayHello() {
    console.log("지역 Hello");
}
console.log("전역 Hello");
sayHello();
console.log(`덧셈 : ${sumFunc(20,30)}`); // 호이스팅이 가능해서 위에 놓고 써도 된다. 
//function을 메모리에 먼저 올림(인터프리터) 
//덧셈 기능이 있는 함수를 선언
const num1 = 10; //전역변수 : 많이 사용하지 말지, 상수나 DB 접속정보 만을 쓰기
function sumFunc(num2, num3) { //num2 : 매개변수
    const num1 = 11; //지역변수, 전역변수와 이름이 같아도 둘이 다른 변수임
    console.log("지역 : ",num1); 
    return num2 + num3 ; //return은 함수 제일 마지막에 사용, 값을 다시 전달할 때 사용
    // return이 필요없으면 안써도 된다. 
}
console.log("전역 : ", num1);
console.log(`덧셈 : ${sumFunc(2,3)}`); // 여기서 2,3은 인자라고 한다

//함수 표현식
//console.log(`덧셈 : ${sumFunc2(10,15)}`);  호이스팅 불가
let sumFunc2 = function(num1, num2) {
    return num1 + num2;
}
console.log(`덧셈 : ${sumFunc2(10,15)}`); 

//화살표 함수 리액트 할 때 이거 많이 사용
let sumFunc3 = (num1, num2) => {
    return num1 + num2 ;
}
console.log(`덧셈 : ${sumFunc3(100,15)}`); 

