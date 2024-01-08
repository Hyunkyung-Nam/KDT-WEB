//실습 1
console.log('실습1');
let arrs = [];
for (i = 1; i <= 100; i++) {
    arrs.push(i);
}
console.log(arrs);

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < arrs.length; i++) {
    sum1 += arrs[i];
}
console.log(sum1);

for (arr of arrs) {
    sum2 += arr;
}

console.log(sum2);

arrs.forEach((arr) => {
    sum3 += arr;
});

console.log(sum3);

//실습 2
console.log('');
console.log('실습2');

let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고', '두리안'];

//방법1
// let same = [];
// let diff = [];
// fruits1.forEach((fruits) => {
//     if (fruits2.includes(fruits)) {
//         same.push(fruits);
//     }
// });

// fruits1.forEach((fruits) => {
//     if (!fruits2.includes(fruits)) {
//         diff.push(fruits);
//     }
// }); // 논리적으로 틀림 '두리안'이 포함되지 않음

//방법2
let same = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff1 = fruits1.filter((fruit) => !fruits2.includes(fruit));
let diff2 = fruits2.filter((fruit) => !fruits1.includes(fruit));

for (i = 0; i < diff2.length; i++) {
    diff1.push(diff2[i]);
}

console.log(same);
console.log(diff1);

// 스프레드 연산자 이용하면 쉽게 할수있다.
