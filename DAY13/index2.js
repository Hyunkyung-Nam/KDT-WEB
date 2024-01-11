//javascript
console.log(document);
console.log($(document));
//jQurey
$(document).ready(function () {
    console.log('ready() - 문서의 dom 트리가 완성되면 실행되는 이벤트');
    //파일이 열리면서 실행되어야하는것들 여기다 넣으면 된다.
});

$(function () {
    console.log('안녕');
});
//위를 이렇게 줄일 수도 있다.

$('hello').hover(function () {
    $('.hello').css('cursur', 'pointer()');
});

$('.hello').click(function () {
    $('.hello').css('color', 'red');
});

$('.nums').click(function () {
    // $('.nums').css('color', 'blue');
    $(this).css('color', 'blue');
    //$(this)는 자기자신, 즉 이벤트가 적용된 요소
});

//이벤트 처리할때 자바스크립트처럼 사용할 수 도 있음
$('.nums').on('click', function () {
    //얘를 축약형으로 쓴게 위에있는거다. 복잡한 이벤트만들때 애를 사용
    $(this).css('color', 'red');
});

$('.numbers').mouseover(function () {
    //마우스 올렸을 때
    $('.numbers').css('background-color', 'green');
    //   $('.numbers').append('<li>mouseover() call</li>');
});

// $('.numbers').mouseout(function () {
//     //마우스 올린거 떼었을 때
//     $('.numbers').css('background-color', 'unset');
// });

// $('.div-hover').hover(
//     function () { //function하나만 쓰면 올렸을 때
//         $(this).addClass('hover');
//     },
//     function () {// function 두개쓰면 마우스 올렸을 때와 떼었을때
//         $(this).removeClass('hover');
//     }
// );

$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

//scroll()
// 예시 : 윈도우 창 스크롤할 경우
$(window).scroll(function () {
    //window -> 브라우저 화면 전체를 뜻함
    console.log('scroll');
});

//keydown
$('.input-key').keydown(function (e) {
    if (e.code === 'ArrowUp') {
        console.log('up');
    }
});
