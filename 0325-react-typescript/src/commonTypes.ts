//여러파일에서 공통적으로 사용하는 타입을 관리

export interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
}