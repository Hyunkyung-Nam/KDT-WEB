//HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);

text.textContent = 'hi'; // 요즘 많이 쓰는 방법이다. 옛날브라우저쓰는데는 안들어 갈 수 도 있다 익스플로러 9이상부터 가능
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다.'; // 위에서부터읽기때문에 얘만 들어가게 되는거다.
//textContent : 요소안에 텍스트를 가져오거나 수정
//innerText :요소안에 텍스트를 가져오거나 수정
//textContent랑 innderText차이
//textCentent : 공백 문자 그대로 반환, IE9 이전 버전 사용 불가
//innerText : 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소는 수정 불가
//interHTML : 입력된 문자열을 HTML형식으로

//classList
console.log(text.classList.contains('title'));
text.classList.add('title');
console.log(text.classList.contains('title'));
text.classList.remove('title');
text.classList.toggle('title-big');

/*
*add : class추가
*remove : class제거
*toggle : class가 있으면 제거, 없으면 추가
    -> 메뉴에서 버튼 누르면 아래로 주르륵 열렸다가 누르면 다시 사라지는거 
*contains : 해당 클래스가 있는지 boolean으로 알려줌 
    -> 얘를 가지고 여러 이벤트 들을 만들어 줄 수 있다.
*/

//setAttribute : HTMl요소 속성 추가
const link = document.getElementById('link'); // 태그선택자로는 오류날 경유가 많음 id/class 사용이 대부분
console.log(link);
link.setAttribute('href', 'https://www.naver.com');

const img = document.getElementById('img');
console.log(img);
img.setAttribute('src', 'img.JPG');
img.setAttribute('width', '200px');

const input = document.getElementById('input');
console.log(input);
input.setAttribute('placeholder', '이름을 입력하세요');

//다른 노드에 접근하기
//많이쓰는 방법은 아님
