const btn = document.getElementById('btn');
const default1 = document.getElementById('default');
const input = document.getElementById('input');

/** this
 * 그 함수가 속해 있던 객체 참조
 *  뭔가를 클릭할 때 불러오는 함수(콜백함수)에서 this는 그 뭔가를 의미함
 */

//button만들면 보통 onclick을 많이 사용한다.
btn.addEventListener('click', function (event) {
    //이벤트 객체생성 (매개변수를 쓰면 해당 객체를 저장함 /  매개변수 안써도된다)
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.preventDefault);
});

default1.addEventListener('click', function (e) {
    e.preventDefault();
    //submit막음/ 폼 전송을 막는 메소드
    console.log(this); //자기자신을 뜻함
    this.textContent = '클릭함';
    console.log(this.textContent);
});

btn.addEventListener('mouseover', function () {
    console.log('mouseover');
});
btn.addEventListener('mouseout', function () {
    console.log('mouseout');
});

//btn.addEventListener -> 모든 종류가 . 다되는게 아님.

input.addEventListener('focus', function () {
    console.log('focus');
});

input.addEventListener('blur', function () {
    console.log('blur');
});

input.addEventListener('keydown', function () {
    console.log('keydown'); // 길이제한할때 사용
});
input.addEventListener('keyup', function () {
    console.log('keyup'); // 길이제한할때 사용
});
