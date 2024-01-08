//UTC 국제 표준시
//1970년 1월 1일 0시를 기준으로 시작(UTC) ex> 대한민국 : UTC+9
console.log(new Date());
const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 1월 -> 0부터시작
console.log(date.getDate()); //날짜
console.log(date.getDay()); // 0과7이 일요일 / 1이 월요일
console.log(date.getTime()); //타임스탬프값
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(
    `${date.getFullYear()}년 ${
        date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`
);

//Math

console.log(Math.PI); //브라우저마다 숫자가 좀 다름
console.log(Math.E); //브라우저마다 숫자가 좀 다름
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
console.log(Math.random()); // 0부터 1사이의 난수 -> 세금계산할때 사용
console.log(Math.round(1.6)); // 반올림 -> 세금계산할때 사용
console.log(Math.floor(1.6)); // 버림 -> 세금계산할때 사용
console.log(Math.ceil(1.4)); //올림
console.log(Math.abs(10 - 28)); //절댓값
console.log(Math.cbrt(8)); //세제곱근 반황
console.log(Math.sqrt(4));
