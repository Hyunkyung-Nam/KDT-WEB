import PropTypes from 'prop-types';

function FunctionComponenet({ name, time, children }) {
    //props밖에 안받기때문에 이렇게 사용도 가능하다 파라미터 받을때부터 구조분해 할당해서 사용할수있다
    // const { name, time } = props;
    return (
        <div>
            <h1>HI {name}</h1>
            <h1>HI {time}</h1>
            <h4>{children}</h4>
        </div>
    );
}

FunctionComponenet.defaultProps = {
    name: '홍길동',
    time: '벌써 12시',
    children: '자식',
};

FunctionComponenet.propTypes = {
    name: PropTypes.string,
    // time: '벌써 12시',
    children: PropTypes.string,
};
export default FunctionComponenet;
