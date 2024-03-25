import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoItemProps } from '../commonTypes';

export default function TodoList() {
    const [todos, setTodos] = useState<TodoItemProps[]>([]); //[]만 넣어줬더니 type이 never라고 나옴
    // 전체 Todo목록
    const [newTodo, setNewTodo] = useState<string>(''); //새로 추가된 Todo하나
    const ipnutRef = useRef<HTMLInputElement>(null); //mount되기전에 실행될 수 있으니까 초기화

    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos); //전체 Todo에 새로운 todo추가
        setNewTodo(''); // input 초기화
    };

    //엔터 입력시 todo  추가(키보드 이벤트)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const focusInput = () => {
        ipnutRef.current?.focus(); //null로 초기값을 주었기 때문에 ?안쓰면에러가난다
        //있을때 실행한다는 의미로 ? 추가
    };

    //투두 아이템 완료 상태 변경 함수
    const toggleComplete = (tartedId: Number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === tartedId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>TodoList</h1>
            <div>
                완료 : {todos.filter((value) => value.completed).length}개
            </div>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyDown} // Enter key Event Handler추가
                    ref={ipnutRef}
                />
                <button onClick={addTodo}>추가</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
