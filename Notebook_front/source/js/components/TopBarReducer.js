import update from 'immutability-helper';

const initialState = {
    pageTitle: "Notebooks List"
}

const TopBarActionsEnum = {
    INIT: "TopBarActions.INIT",
    UPDATE: "TopBarActions.UPDATE",
}

const TopBarReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case TopBarActionsEnum.INIT:
            return { ...state, ...payload }

        case TopBarActionsEnum.UPDATE:
            return update(state, { pageTitle: { $set: payload } });

        default:
            return state
    }
}

export default TopBarReducer;
export { TopBarActionsEnum };