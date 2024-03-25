import React from 'react';
import { TodoItemProps } from '../commonTypes';

interface Props {
    todo: TodoItemProps;
    toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    defaultChecked={todo.completed}
                    onClick={() => toggleComplete(todo.id)}
                />
            </label>
            {todo.text}
        </li>
    );
}
