const root = document.getElementById('root');

//노드생성
const p = document.createElement('p');
//<p></p>
p.textContent = '안녕하세요';
//<p>안녕하세요</p>
p.classList.add('append-p');
//<p class="append-p">안녕하세요</p>s
p.style.fontWeight = 'bold';
//<p class="append-p" style="font-weight =bold;">안녕하세요</p>
console.log(p);

//노드추가
/**
 * append() - 노드 객체 또는 텍스트 추가,
 *          - 한번에 여러개의 자식 요소 추가가능
 *          - 반환값 없음
 *          - 마지막 자식으로 추가
 * appendChild() - 노드 객체만 추가 가능
 *               - 한번에 하나씩 추가 가능
 *               - 반환값 있음
 * prepend() - 첫번째 자식으로 추가
 */
root.append(p);
root.append('가나다라마바사');
root.prepend('가나다라마바사아자차카타파하');

const target = document.getElementById('target');

target.prepend('끼야아아아아');

target.before(p);
//target의 이전 형제로 추가
target.after(p); //before와 after 동시에 같은 태그는 못넣는다. 넣고싶다면 p1, p2다시 만들어야 할 듯
//target의 다음 형제로 추가

//노드삭제
/**
 * remove() : 선택한 요소를 삭제
 * removeChild(자식노드) : 선택한 요소의 자식을 삭제
 */

target.remove();
for (i = 0; i < root.childElementCount; i++) {
    root.removeChild(root.children[i]);
}
