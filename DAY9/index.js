//조건문
//if문
//조건은 항상 true나 false가 와야한다.
/*
let isShow = true;
let checked = false;

if(5>3) {
    console.log("5>3!"); 
} else {
    console.log("5<3!");
}

if(isShow) {
    console.log("Show!");
} else {
    console.log("Hide?");
}

if(!checked) {
    console.log("not checked!");
}

console.log("");

let name = "";

if(name === "홍길동") {
    console.log("홍길동 입니다.");
} else if(name === "성춘향") {
    console.log("성춘향 입니다.");
} else if(name === "이몽룡"){
    console.log("이몽룡 입니다.");
} else {
    console.log("변사또 입니다.");
}

const myId = "abc";
const myPw = "1234";
const inputId = prompt("아이디를 입력하세요");
const inputPw = prompt("비밀번호를 입력하세요");

if (myId === inputId){
    if(myPw === inputPw) {
        console.log("로그인 성공!");
    } else {
        console.log("비밀번호가 올바르지 않습니다.");
    }
} else {
     console.log("존재하지 않는 아이디 입니다.");
}*/

//switch문 -> break가 가장 중요!
/*
switch(x){
    case 값1: x === 값1
    break;
    case 값2: // x===값2
    default:
        break;
}
break : 조건문, 반복문에서 빠져나갈 대 사용하는 키워드 
*/

// let a = 2 * 2;

// switch (a) {
//     case 3: //a가 3이고 break;르 모두 쓰지 않으면 모든케이스가 다 출력된다.
//         console.log('현재 값은 3입니다.');
//         break;
//     case 4:
//         console.log('현재 값은 4입니다.');
//         break;
//     case 5:
//         console.log('현재 값은 5입니다.');
//         break;
//     default:
//         console.log('알수없는 값입니다.');
//         break;
// }

// let grade = 'A';

// switch (grade) {
//     case 'A':
//         console.log('학점 A');
//         break;
//     case 'B':
//         console.log('학점 B');
//         break;
//     case 'C':
//         console.log('학점 C');
//         break;
//     case 'D':
//         console.log('학점 D');
//         break;
//     case 'F':
//         console.log('학점 F');
//         break;
//     default:
//         console.log('오류발생');
// }

// //삼항연산자

// let myId = 'abc';
// let myPW = '1234';
// const inputID = prompt('아이디를 입력하세요');
// const inputPW = prompt('비밀번호를 입력하세요');

// //삼항연산자에는 ; 가 들어가며 안되나 보구만
// myId === inputID
//     ? myPW === inputPW
//         ? console.log('로그인에 성공하였습니다.')
//         : console.log('비밀번호가 올바르지 않습니다.')
//     : console.log('존재하지 않는 아이디입니다.');

//반복문
/*for문
for(초기값;조건식;증감식){
    //반복코드
}
*/
//step1. 0부터 5까지 1씩 증가
for (let i = 0; i < 6; i++) {
    console.log(i);
}
//step2. 5부터 0까지 1씩 감소
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
//step3. 1부터 10까지 중에서 짝수를 출력
//step3-sol1. 반복문과 조건문 활용
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
//step3-sol2. 증감값 변경
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//step4. 배열과 함께 쓰기
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
for (let i = 0; i < colors.length; i++) {
    console.log(`무지개 ${i + 1}번째 색상은 ${colors[i]}입니다`);
}

// for (let index = 0; index < 10; index++) {
//     console.log(`인사를 ${index + 1}번째 드립니다! :)`);
// }

//반복문 While
//for문과는 달리 조건을 변경하는 구문이 기본적으로 포함이 되어 있지 않기 때문에 무한루프 가능
/*
    while(조건문){
        실행할 코드(명령문) // break가 필요하거나 조건문에 탈출조건을 잘 써야한다. 
    }
*/

//while가지고 up/down게임 이런거 만들수 있음 (간단한 게임 만들 수 있다.)

//step1 1부터 5까지 1씩 증가
let step1 = 0;
while (step1 < 6) {
    console.log(step1);
    step1++;
}
//step2 9부터 4까지 1씩 감소
let step2 = 9;
while (step2 >= 4) {
    console.log(step2);
    step2--;
}
//step3 1부터 10까지 홀수 출력
let step3 = 1;

while (step3 <= 10) {
    if (step3 % 2 === 1) {
        console.log(step3);
    }
    step3++;
}
//step4 break사용
let step4 = 10;
while (true) {
    console.log(step4);
    step4++;
    if (step4 > 20) {
        break;
    }
}
//반복문 제어
//break; 멈추고 빠져나옴
//continue; 멈추고 다음반복으로 진행

for (let i = 0; i < 100; i++) {
    if (i == 10) {
        console.log('멈춰!');
        break;
    }
    console.log(i);
}

let sum = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    }
    sum += i;
}

console.log(sum);
