import { createSlice } from '@reduxjs/toolkit';

// 게시판

const initialState = {
    postList: [],
};

//createSlice : reducer와 action을 함께 생성하는 함수

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState, // initialState만써도됨
    reducers: {
        addPost: (state, action) => {
            console.log('Action :', action);
            state.postList.push(action.payload);
        },
    },
});

//postSlice.actions : 액션 생성자들 포함되어있음
export const { addPost } = postSlice.actions;

//postSlice.reducer : 상태를 업데이트 하기 위한 것
export default postSlice.reducer;
