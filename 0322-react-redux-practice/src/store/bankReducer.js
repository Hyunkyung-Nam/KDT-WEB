const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

export const deposit = () => ({
    type: DEPOSIT,
});
export const withdraw = () => ({
    type: WITHDRAW,
});
const initialize = 0;

const bankReducer = (state = initialize, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload;
        case WITHDRAW:
            return state - action.payload;

        default:
            return state;
    }
};

export default bankReducer;
