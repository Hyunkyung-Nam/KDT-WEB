const target = document.getElementById('target');
console.log(target);

//target을 기준으로 부모의 모든 자식태그 선택
const children = target.parentNode.children;
console.log(children);

//target 기준으로 부모의 첫번째 자식 선택
const first = target.parentNode.children[0];
console.log(first);

//target 기준으로 부모의 3번째 자신 선택
const third = target.parentNode.children[2];
console.log(third);

//target 기준으로 부모 선택
const parent = target.parentNode;
console.log(parent);

//target 기준 이전형제
const prev = target.previousElementSibling;
console.log(prev);

//target 기준 다음형제
const next = target.nextElementSibling;
console.log(next);
