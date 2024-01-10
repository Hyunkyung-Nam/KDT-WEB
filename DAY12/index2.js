//jquery
//$(선택자).동작함수();

// console.log($('#hello').text()); //id가 hello인 text를 가져옴.
// $('#hello').text('안녕히가세요');
// $('#hello').css('font-size', '20px');
// $('#hello').css('color', 'red');

//jquery메소드
//val()

function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
    console.log($('input').val());
}

//css()

function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color:red;';
}
function changeCssJquery() {
    //$('span').css('font-size', '40px');
    //$('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' }); //하나의 객체로 묶어서 사용할 수 있음
    // 프리티어가 color에 ''뺌 그래도 동작가능
}
function getCssJquery() {
    console.log($('span').css('color'));
}

//attr()

function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

//html()
function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javascript</p>';
}
function changeHtmlJquery() {
    $('.html').html('<p>jquery</p>');
}
//요소 추가하기 추가하려면 기준이 있어야한다.
//요소의 자식의 맨마지막에 추가
function appendJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');

    li.textContent = 'red';
    li.classList.add('red');

    ul.append(li);
}
function appendJquery() {
    let red = `<li class = 'red'>red</li>`;
    $('.colors').append(red);
}
//요소의 자식의 맨앞에 추가
function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');

    li.textContent = 'blue';
    li.classList.add('blue');

    ul.prepend(li);
}
function prependJquery() {
    let blue = `<li class = 'blue'>blue</li>`;
    $('.colors').prepend(blue);
}
//요소 자식 한개 지우기
function removeJs() {
    let li2 = document.querySelector('#li2');
    li2.remove();
}
function removeJquery() {
    $('#li2').remove();
}
//요소 자식 모두 지우기
function emptyJs() {
    let nums = document.querySelector('ul.nums');
    console.log(nums);

    nums.innerHTML = ''; // 이렇게 쓰면 . 다지우는 것과 동일하다.
}
function emptyJquery() {
    $('ul.nums').empty();
}
//요소 탐색
function findParent() {
    console.log($('.child2').parent());
}
function findParnets() {
    console.log($('.child2').parents());
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function findChildren() {
    console.log($('.parent').children());
}
