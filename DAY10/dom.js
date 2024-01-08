//아이디를 이용한거
const ids = document.getElementById('kdt11-id');

const classes = document.getElementsByClassName('kdt11-class');

const names = document.getElementsByName('kdt11-name');

const tags = document.getElementsByTagName('body'); // html 태그이름

//querySelector쓸 때에는 id선택자 아니면 class선택자 이용해서 쓴다.
const queryIds = document.querySelector('#kdt11-id');
console.log(queryIds);
console.log(ids);

const queryClassed = document.querySelector('.kdt11-class');

const box = document.querySelector('.box');
const boxes = document.querySelectorAll('.box');

console.log(box);
console.log(boxes);
console.log(queryClassed);
console.log(classes);

console.log(names);
console.log(tags);
