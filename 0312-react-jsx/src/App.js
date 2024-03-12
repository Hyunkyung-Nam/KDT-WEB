import logo from './logo.svg';
import './App.css';

function App() {
    //실습1 풀이
    //실습4
    // let title = '';
    // function setTitle(inputTitle) {
    //     title = inputTitle;
    //     return title;
    // }
    // return (
    //     <>
    //         <div className="container">
    //             <div className="header">{setTitle('Hellow World')}</div>
    //             <div className="body">
    //                 <div className="id-box">
    //                     <label htmlFor="user-id">아이디 : </label>
    //                     <input type="text" name="" id="user-id" />
    //                 </div>
    //                 <div className="pw-box">
    //                     <label htmlFor="user-pw">비밀번호 : </label>
    //                     <input type="password" name="" id="user-pw" />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
    //실습3
    // let a = 10;
    // let b = 4;
    // return <div>{a > b && 'a가 b보다 큽니다'}</div>;
    //실습2
    // return <div>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</div>;
    //실습1
    // const name = '똥이';
    // const animal = '고양이';
    // return (
    //     <>
    //         <h2>
    //             제 반려 동물의 이름은 <u>{name}</u>입니다.
    //             <br /> <u>{name}</u>는 <u>{animal}</u>
    //             입니다.
    //         </h2>
    //     </>
    // );
    /*
    const name = 'Codee';
    const styles = {
        color: 'blue',
        fontSize: '48px',
        backgroundColor: 'yellow',
    };*/
    //주석작성
    // return (
    //     <>
    //         <div className="App">
    //             {/* <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo" />
    //             <p>
    //                 Edit <code>src/App.js</code> and save to reload.
    //             </p>
    //             <a
    //                 className="App-link"
    //                 href="https://reactjs.org"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 Learn React
    //             </a>
    //         </header> */}
    //             {/* JSX 문법 */}
    //             {/* 1. 하나로 감싸인 요소 */}
    //             {/* 2. javascript 표현식 사용가능
    //               - { 로 감싸면 js표현식 사용 가능
    //               - {} 에서 삼항 연산자 사용 가능(if, for안됨)
    //             */}
    //             <div>{name} 안녕?</div>
    //             <div>반갑다</div>
    //             <div>{name === 'Codee' ? 'KDT 11기에요!' : '누구세요'}</div>
    //             {/* 3. 스타일 속성
    //               - html inner에서는 문자열을 사용
    //               - 리액트에서 dom요소에 스타일 적용시 문자열 X ->  객체 사용
    //               - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야 함
    //             */}
    //             <div style={styles}>하이~</div>
    //             <div
    //                 style={
    //                     //jsx 문법을 사용하겠다는 중괄호이다!!!!
    //                     {
    //                         // 객체 중괄호 넣은거
    //                         color: ' yellow',
    //                         fontSize: '48px',
    //                         backgroundColor: 'blue',
    //                     }
    //                 }
    //             >
    //                 하이하이
    //             </div>
    //             {/* 4. className 사용
    //               - 기존의 class 속성이 아니라 className 속성 사용
    //               - 자바스크립트에는 class가 있기 때문에 className을 사용하는 것이다.
    //               5. 종료 태그가 없는 태그의 사용
    //                 - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야함  or self-closing
    //                 - ex. <br> => <br /> or <br></br>
    //               6. 주석
    //                 - // : jsx 외부 주석 => 함수와 return 사이
    //                 - {/**₩/} : jsx 내부 주석
    //             */}
    //         </div>
    //         <div>부모가 없다</div>
    //     </> //pregment라는 태그가 있음 , 의미없이 태그쓸때, 단순히 부모로 묶어줄 때 사용
    // );
}

export default App;
