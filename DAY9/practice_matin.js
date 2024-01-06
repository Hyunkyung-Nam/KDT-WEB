/*실습5
let inputAge = Number(prompt("나이를 입력하세요"));
let inputGender = prompt("성별을 입력하세요(남자/여자)");
//김성수님 코드 참고
const man = "남자";
const woman = "여자;"
const adult = 20;
const highSchool = 17;
const middleSchool = 14;
const elemetaryiSchool = 8;
const preSchoolChild = 0;

//나이 기준
if (inputAge >= adult){
    if (inputGender == man){
        console.log(`성인 ${inputGender}`);
    } else if (inputGender == woman) {
        console.log(`성인 ${inputGender}`);
    }
} else if (inputAge >= highSchool){
    if (inputGender == man){
        console.log(`고등학생 ${inputGender}`);
    } else if (inputGender == woman) {
        console.log(`고등학생 ${inputGender}`);
    }
} else if (inputAge >= middleSchool){
    if (inputGender == man){
        console.log(`중학생 ${inputGender}`);
    } else if (inputGender == woman) {
        console.log(`중학생 ${inputGender}`);
    }
} else if (inputAge >= elemetaryiSchool){
    if (inputGender == man){
        console.log(`초등학생 ${inputGender}`);
    } else if (inputGender == woman) {
        console.log(`초등학생 ${inputGender}`);
    }
} else if (inputAge >= preSchoolChild){
    if (inputGender == man){
        console.log(`유아 ${inputGender}`);
    } else if (inputGender == woman) {
        console.log(`유아 ${inputGender}`);
    }
} 

//성별기준 -> 코드가 중복됨 -> 함수로 쓰면됨

function ageFunc(inputAge, inputGender) {
    if (inputAge >= adult){
        console.log(`성인 ${inputGender}`);
    } else if (inputAge >= highSchool){
        console.log(`고등학생 ${inputGender}`);
    } else if (inputAge >= middleSchool){
         console.log(`중학생 ${inputGender}`);
    } else if (inputAge >= elemetaryiSchool){
         console.log(`초등학생 ${inputGender}`);
    } else if (inputAge >= preSchoolChild){
         console.log(`유아 ${inputGender}`);
    } else {
        console.log("0이상의 숫자를 입력하세요");
    }
}

if (inputGender == man) {
    ageFunc(inputAge, inputGender);
} else if (inputGender == woman){
    ageFunc(inputAge, inputGender);
} else {
    console.log("남자/여자 이외의 성별입니다.");
}*/
/*실습6
let now = new Date().getHours();

now < 12 ? console.log('오전') : console.log('오후');*/

//이중for문
//for문에 또 for문
/* 
    for () {
        for() {
            
        }
    }
*/

//실습 9
let num = 50;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
