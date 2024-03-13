import logo from './logo.svg';
import './App.css';
import Food from './Food';
import BestSeller from './BestSeller';
import ClassProps from './ClassProps';
import Counter from './Counter';
import CounterFunc from './CounterFunc';

function App() {
    // const book = {
    //     title: '여행의 이유',
    //     author: '김영하',
    //     price: '13,500',
    //     type: '여행에세이',
    // };
    return (
        <div className="App">
            <Counter></Counter>
            <CounterFunc></CounterFunc>
            {/* <ClassProps
                valid={() => {
                    console.log('콘솔띄우기 성공');
                }}
            /> */}
            {/* <BestSeller
                title="여행의 이유"
                author="김영하"
                price="13,500"
                type="여행 에세이"
                book={book}
            /> */}
        </div>
    );

    // const food = '청국장';
    // const description =
    //     '밥이 보약이다.. 힘들때 청국장에 밥말아서 후루룩 먹으면 최고... ';
    // return (
    //     <div className="App">
    //         <Food food={food}>{description}</Food>
    //         <hr />
    //         <Food />
    //         <BestSeller />
    //     </div>
    // );
}

export default App;
