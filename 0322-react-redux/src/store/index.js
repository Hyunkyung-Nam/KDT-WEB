import { combineReducers } from 'redux';
import counterReducer from './couterReducer';
import isVisibleReducer from './isVisibleReducer';

/**
 * combineReduces는 여러개의 reducer를 하나로 합침
 * store는 1개지만 reducer는 여러개 일 수 있음
 */
const rootReducer = combineReducers({
    counter: counterReducer, // counterReducer등록
    isVisible: isVisibleReducer,
});

export default rootReducer;
