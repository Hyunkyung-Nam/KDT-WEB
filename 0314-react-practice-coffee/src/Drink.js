import { Component } from 'react';

export default class Drink extends Component {
    render() {
        const { menuList, onClick } = this.props;
        const style = {
            width: '100px',
            height: '100px',
        };
        return (
            <tr>
                <td>
                    <img style={style} src={menuList.menuImg} alt="" />
                </td>
                <td>{menuList.menuName}</td>
                <td>{menuList.menuPrice} 원</td>
                <td>
                    <button onClick={() => onClick(menuList.menuName)}>
                        선택
                    </button>
                </td>
            </tr>
        );
    }
}
