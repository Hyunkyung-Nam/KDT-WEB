import { Component } from 'react';
import PropTypes from 'prop-types';
//prop-types라이브러리를 PropTypes로 import해서 사용하겠다.

class ClassComponent extends Component {
    // Component를 상속받아서 사용
    // 클래스형 컴포넌트는 render 함수 필수
    render() {
        //자기자신의 객체에 접근을해서 props를 불러옴
        console.log('props', this.props);
        const { name } = this.props;
        return (
            //html요소 return
            <div>
                <h1>HI {name}</h1>
            </div>
        );
    }
}

// ClassComponent.defaultProps = { 왜 이거 설정은 reload해야 반영될까?? 신기하네 virtual dom tree 일안하니!!!
//     name: '홍길동',
// };
//함수형이랑 클래서형이랑 같이써서 문제가 생기는듯(required안뜨는거)
ClassComponent.propTypes = {
    name: PropTypes.string.isRequired, //필수값에 대한 경고가 없음 -> default값이 있어서 그렇다 근데 경고문구가 안뜬다..? 왜지 default 주석해도 안뜸 ㅇㅂㅇ ..
    // time: '벌써 12시',
    children: PropTypes.string,
};

export default ClassComponent;
