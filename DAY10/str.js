let str = 'Happy day~!  ';
console.log(str.length); //빈문자포함한 문자열 길이
console.log(str.toUpperCase()); // 문자열 모두 대문자로 변환
console.log(str.toLowerCase()); // 문자열 모두 소문자로 변환
//toUppeCase()나 toLowerCase()는 보통 회원가입시 아이디 중복을 막기 위해 자주 사용
console.log(str.indexOf('y')); //몇번째 인덱스 인지 확인, 단 첫번째 문자만 검색해서 나온다.
console.log(str.slice(2)); //()에 적으면 자른 수 만큼 앞에서부터 잘린다
console.log(str.slice(2, 5)); //앞에 2개자르고 앞에서 5번째부터 자름 앞의 숫자부터 뒤숫자-1까지 슬라이싱
console.log(str.slice(2, -8)); // 음수는 뒤에서 부터 자름
console.log(str.replace('a', 's')); // 이것도 제일먼저 나온 것만 바뀐다, 정규식을 이용하면 모두 바꿀수도있음
console.log(str.replaceAll('a', 's'));
console.log(str.repeat(5)); // 문자 반복
console.log(str.trim().length);
console.log(str.split('')); // 문자열 자르기 / 이게 가장 중요함
console.log(str.split(' ')); //괄호안에 쓴 문자는 사라지고 그 문자를 기준으로 나눠줌 맨뒤에 공백은 다 빈값으로 들어감
console.log(str.split('p')); // 'ha', '', 'y day~!  ' 이렇게 나뉜다. 앞에있는 p기준으로 잘라지고 뒤에있는 p는 ''빈값으로 나뉨
console.log(str.trim().toLowerCase().split('p')); //메소드 체이닝

console.log('');

let hello = 'Hello';
helloArr = hello.split('');
console.log(helloArr);

let reverseHello = helloArr.reverse();
console.log(reverseHello);

let helloAgain = reverseHello.join('');
console.log(helloAgain);

console.log(hello.split('').reverse().join(''));

console.log('');
/* let str { 객체로 만들어져있어서 . 을 사용해서 호출 가능
    length : ;
    let toUpperCase : function() {
        return 
    }
}
*/

//배열

const colors = ['red', 'orange', 'yellow'];

console.log(colors.join('&')); // "" 안의 값으로 붙는다
