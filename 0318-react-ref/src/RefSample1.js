import { Component } from 'react';

export default class RefSample1 extends Component {
    handleFocus = () => {
        //input focus 처리
        console.log(this);
        console.log(this.myInput);
        this.myInput.focus();
    };
    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
                <input
                    type="text"
                    ref={(ref) => {
                        //ref값을 담을건데 해당 컴포넌트안에 접근하려고this를 사용한다
                        //해당하는 component의 myInput이라는 변수가 생긴것!
                        //class의 member변수로 myInput이 생긴것!
                        this.myInput = ref;
                    }}
                />
                <button onClick={this.handleFocus}>focus</button>
            </>
        );
    }
}
