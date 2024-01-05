//object실습
const THISYEAR = 2024;
let myIntroduce = {
    name : "남현경",
    gender : "여자",
    mbti : "ISFP",
    age:function() {
        return THISYEAR-1994+1;
    }
}
console.log("이름 :" + myIntroduce.name);
console.log(`나이 : ${myIntroduce.age()}`);
console.log(`성별 : ${myIntroduce.gender}`);
console.log(`MBTI : ${myIntroduce.mbti}`);

//typeof 실습
console.log(`${typeof (123)} isn't ${typeof ("123")} data type.`);
console.log(`Typeof를 boolean이나 null에 사용하면, ${typeof(true)}결과를 얻을 수 있습니다.`);

//형변환 실습
let mathScore;
let engScore;

mathScore = "77";
engScore = "88";

let avgScore = (Number(mathScore) + Number(engScore)) / 2 ; //명시적 형변환

console.log(avgScore);

//실습1. 곱셈함수만들기 실습
function multifly(num1, num2){
    return num1 * num2 ;
}
console.log(multifly(3,7));
console.log(multifly(2,2));

//실습2. 제곱함수만들기
function square(num){
    return console.log(num ** 2) ;
}
square(4);
square(11);
square(5);