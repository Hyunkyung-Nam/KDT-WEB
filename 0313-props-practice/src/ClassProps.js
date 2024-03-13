import { Component } from 'react';
import PropTypes from 'prop-types';
export default class ClassProps extends Component {
    render() {
        const { text, valid } = this.props;
        return (
            <div>
                <div>{text}</div>
                <button onClick={valid}>버튼</button>
            </div>
        );
    }
}

ClassProps.defaultProps = {
    text: '이건 기본 text props 입니다.',
};
ClassProps.propTypes = {
    text: PropTypes.string.isRequired,
};
