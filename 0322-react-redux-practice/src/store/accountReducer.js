const DEPOSIT = 'account/DEPOSIT';
const WITHDRAWAL = 'account/WITHDRAWAL';

export const deposit = (despositMoney) => ({
    type: DEPOSIT,
    money: despositMoney,
});
export const withdrawal = (withdrawalMoney) => ({
    type: WITHDRAWAL,
    money: withdrawalMoney,
});

const initialize = {
    money: 0,
};

const accountReducer = (state = initialize, action) => {
    switch (action.type) {
        case DEPOSIT:
            //들어온 금액만큼 더해서 보내기
            return { money: state.money + action.money };
        case WITHDRAWAL:
            return { money: state.money - action.money };
        default:
            return state;
    }
};

export default accountReducer;
