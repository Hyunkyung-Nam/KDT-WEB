/*실습 4
let inputAge = Number(prompt("나이를 입력하세요"));

if(inputAge >= 20){
    console.log("성인입니다.");
} else if(inputAge >= 17){
    console.log("고등학생입니다.");
} else if(inputAge >= 14){
    console.log("중학생입니다.");
} else if(inputAge >= 8){
    console.log("초등학생입니다.");
} else if (inputAge >= 0) {
    console.log("유아입니다.");
}*/

/*실습5
let inputAge = Number(prompt("나이를 입력하세요"));
let inputGender = prompt("성별을 입력하세요 (남자/여자)");

if(inputAge >= 20){
    if(inputGender === "남자"){
        console.log("남자 성인입니다.");
    } else if (inputGender === "여자") {
        console.log("여자 성인입니다.");
    } else {
        console.log("남자/여자외의 성별 성인입니다.");
    }
} else if(inputAge >= 17){
    if(inputGender === "남자"){
        console.log("남자 고등학생입니다.");
    } else if (inputGender === "여자") {
        console.log("여자 고등학생입니다.");
    } else {
        console.log("남자/여자외의 성별 고등학생입니다.");
    }
} else if(inputAge >= 14){
    if(inputGender === "남자"){
        console.log("남자 중학생입니다.");
    } else if (inputGender === "여자") {
        console.log("여자 중학생입니다.");
    } else {
        console.log("남자/여자외의 성별 중학생입니다.");
    }
} else if(inputAge >= 8){
    if(inputGender === "남자"){
        console.log("남자 초등학생입니다.");
    } else if (inputGender === "여자") {
        console.log("여자 초등학생입니다.");
    } else {
        console.log("남자/여자외의 성별 초등학생입니다.");
    }
} else if (inputAge >= 0) {
    if(inputGender === "남자"){
        console.log("남자 유아입니다.");
    } else if (inputGender === "여자") {
        console.log("여자 유아입니다.");
    } else {
        console.log("남자/여자외의 성별 유아입니다.");
    }
} else {
    console.log("0이상의 숫자를 입력하세요");
}*/

//실습6.

// let now = new Date().getHours();

// now === 24
//     ? console.log(`오전 ${now - 12}시 입니다.`)
//     : now == 12
//     ? console.log(`오후 ${now}시 입니다.`)
//     : now > 12
//     ? console.log(`오후 ${now - 12}시 입니다.`)
//     : console.log(`오전 ${now}시 입니다.`);

//실습 7

// for (let i = 0; i <= 10000; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(`13의 배수이면서 홀수인 숫자는 ${i}입니다`);
//     }
// }

//실습 7-1
// let inputNum = Number(prompt('숫자를 입력하세요'));

// while (isNaN(inputNum)) {
//     inputNum = Number(prompt('숫자를 다시 입력하세요'));
// }

// if (inputNum < 13) {
//     console.log(`1부터 ${inputNum}까지의 수 중 13의 배수이면서 홀수인 수는 없습니다.`);
// }

// for (let i = 0; i <= inputNum; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(`13의 배수이면서 홀수인 숫자는 ${i}입니다`);
//     }
// }

//실습 8
// for (let i = 2; i <= 9; i++) {
//     console.log(`---${i} 단---`);
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

//실습9

let n = 1;
let sum = 0;
while (n < 100) {
    if (n % 2 == 0 || n % 3 == 0) {
        sum += n;
    }
    n++;
}
console.log(sum);
