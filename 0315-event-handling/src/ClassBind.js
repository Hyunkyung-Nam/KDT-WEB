import { Component } from 'react';

export default class ClassBind extends Component {
    //클래스형 컴포넌트를 잘 안쓰지만 개념적인 부분 알아두는 거라 프로젝트할때는 함수형으로 작업하면된다
    // 클래스 컴포넌트에서 이벤트를 쓸 때 - 화살표 함수 사용
    state = {
        name: '코딩온',
    };
    printConsole = () => {
        console.log('this', this);
        console.log('state', this.state);
        // this는 현재 ClassBind Component를 뜻함
    };
    printConsole2 = (hi) => {
        console.log(hi);
    };

    /**
     *
     * printConsole3() {} -> 일반함수로 표현
     * => this.printConsole3() = this.printconsole3().bind(this)
     *      - bind()는 해당 함수에서 가리킬 this를 직접 설정
     *      - 묶어준다...ㅇㅂㅇ....
     */
    render() {
        return (
            <div>
                <h1>Class Component Event</h1>
                <button onClick={this.printConsole}>
                    Print Console(인자X)
                </button>
                {/* 익명함수로 감싸서 인자전달할수있게 둔다 */}
                <button onClick={() => this.printConsole2('안녕')}>
                    Print Console(인자O)
                </button>
            </div>
        );
    }
}
