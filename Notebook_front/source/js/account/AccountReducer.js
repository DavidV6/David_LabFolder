const initialState = {
    username: "test",
    password: "test",
    type: "test"
}

const AccountActionsEnum = {
    INIT: "AccountActionsEnum.INIT"
}

const AccountReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case AccountActionsEnum.INIT:
            return { ...state, ...payload }

        default:
            return state
    }
}

export default AccountReducer;
export { AccountActionsEnum };