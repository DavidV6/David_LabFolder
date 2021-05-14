import update from 'immutability-helper';

const initialState = {
    listNotebooks: [],
}

const HomepageActionsEnum = {
    INIT: "HomepageReducer.INIT",
}

const HomepageReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case HomepageActionsEnum.INIT:
            return update(state, { listNotebooks: { $set: payload } })

        default:
            return state
    }
}

export default HomepageReducer;
export { HomepageActionsEnum };