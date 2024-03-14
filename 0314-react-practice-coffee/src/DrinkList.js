import { Component } from 'react';
import Drink from './Drink';

export default class DrinkList extends Component {
    state = {
        menu: [],
    };

    render() {
        const { menu } = this.state;
        const menuList = [
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[94]_20210430103337006.jpg',
                menuName: '아메리카노',
                menuPrice: '4500',
            },
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg',
                menuName: '카페라떼',
                menuPrice: '500',
            },
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[46]_20210415134438165.jpg',
                menuName: '카페모카',
                menuPrice: '5500',
            },
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2023/02/[9200000004512]_20230207150514347.jpg',
                menuName: '망고 패션 블렌디드',
                menuPrice: '6300',
            },
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg',
                menuName: '딸기 딜라이트 요거트 블렌디드',
                menuPrice: '6300',
            },
            {
                menuImg:
                    'https://image.istarbucks.co.kr/upload/store/skuimg/2023/05/[9200000004717]_20230524144903032.jpg',
                menuName: '딸기 딜라이트 요거트 블렌디드',
                menuPrice: '6100',
            },
        ];
        const selectMenu = (menuName) => {
            if (!menu.includes(menuName)) {
                this.setState({ menu: [...menu, menuName] });
            }
        };
        const drawDrink = () => {
            const result = [];
            for (let i = 0; i < menuList.length; i++) {
                result.push(
                    <Drink
                        key={i}
                        menuList={menuList[i]}
                        onClick={selectMenu}
                    ></Drink>
                );
            }
            return result;
        };

        return (
            <div>
                <h1>메뉴판</h1>
                <h2>
                    {menu.length === 0
                        ? '원하는 음료를 골라주세요!'
                        : `${menu}를 고르셨군요!`}
                </h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>음료</th>
                            <th>음료명</th>
                            <th>가격</th>
                            <th>선택</th>
                        </tr>
                    </thead>
                    <tbody>{drawDrink()}</tbody>
                </table>
            </div>
        );
    }
}
