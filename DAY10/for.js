let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//for of문 얘는 배열의 값을 뽑음
//for ({}안에서 사용할 변수 of 배열)
for (let number of numbers) {
    console.log(number);
}

for (let color of colors) {
    console.log(color);
}
//forEach()문
//변수명.forEach({}안에서 사용할 변수, 인덱스, 배열){}
numbers.forEach(function (number) {
    console.log(number);
});
numbers.forEach(function (number, index) {
    console.log(number, index);
});
numbers.forEach(function (number, idx, arr) {
    console.log(number, idx, arr);
});
colors.forEach((color) => {
    console.log(color);
});
colors.forEach((color, idx) => {
    console.log(color, idx);
});

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}

for (let number of numbers) {
    sum2 += number;
}

numbers.forEach((number) => {
    sum3 += number;
});
console.log(sum1, sum2, sum3);

let arr, arr2;
//arr = nubers.filter(() => {});
//arr = nubers.filter(function({}안에서 사용할 변수){});
//filter() {}안에는 조건식이 나오는게 일반적
arr = numbers.filter(function (num) {
    //filter는 조건에 부합하는 배열 요소만 반환
    return num > 3; //true, false로 return 한다.
});
console.log(arr);

arr2 = colors.filter((color) => color.length > 5);
console.log(arr2);

//화살표 함수의 특징 중 하나는 {}랑 return을 생략가능.
// 중괄호가 있으면 return이 있어야한다!!

//추가 for in문 얘는 index뽑고
//객체(키-밸류)에 주로사용
//for({}에 사용할 인덱스 of 배열){}

let colors2 = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }]; // 객체 배열

for (let index in colors2) {
    console.log(index, colors2[index], colors2[index].color);
}

for (let index in colors) {
    console.log(index, colors[index]);
}
//do-while은 최소 1번 실행된다.
let i = 0;
do {
    console.log(colors[i]);
    i++;
} while (i < colors.length);
