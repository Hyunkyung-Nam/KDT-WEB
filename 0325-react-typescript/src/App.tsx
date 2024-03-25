import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import TodoList from './components/TodoList';

function App() {
    const handleClick = (name: string, grade: number) => {
        console.log(`안녕 내 이름은 ${name}이고, ${grade}학년이야~`);
    };
    return (
        <div className="App">
            <Student
                name="코딩온"
                grade={3}
                part="CS"
                handleClick={handleClick}
            />
            <Student name="코딩온" grade={3} handleClick={handleClick} />
            <hr />
            <TodoList />
        </div>
    );
}

export default App;
