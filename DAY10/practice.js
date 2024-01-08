//실습1.

let numbers = [];
let sumUsingFor = 0;
let sumUsingForOf = 0;
let sumUsingForEach = 0;

for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    sumUsingFor += numbers[i];
}

for (number of numbers) {
    sumUsingForOf += number;
}

numbers.forEach((number) => {
    sumUsingForEach += number;
});

console.log(sumUsingFor, sumUsingForOf, sumUsingForEach);

//실습 2
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];
let same = [];
let diff = [];
let count = 0;

for (fruit1Element of fruits1) {
    for (fruit2Element of fruits2) {
        if (fruit1Element === fruit2Element) {
            same.push(fruit2Element);
        } else {
            continue;
        }
    }
}

for (fruit1Element of fruits1) {
    for (fruit2Element of fruits2) {
        if (fruit1Element === fruit2Element) {
            same.push(fruit2Element);
            count += 1;
        } else {
            continue;
        }
    }
    if (count === 0) {
        diff.push(fruit1Element);
    }
    count = 0;
} // 이렇게 만들면 틀린다.. fruit2에 다른게 들어가있는경우 들어가지 않음

console.log(same);
console.log(diff);
