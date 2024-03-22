import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import bankReducer from './bankReducer';

const rootReducer = combineReducers({
    account: accountReducer,
    bank: bankReducer,
});

export default rootReducer;
