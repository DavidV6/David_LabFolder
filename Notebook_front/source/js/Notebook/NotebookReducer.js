import update from 'immutability-helper';

const initialState = {
    content: {},
    searchWord: "",
    searchResult: {}
}

const NotebookActionsEnum = {
    INIT: "NotebookActionsEnum.INIT",
    ON_CHANGE_SEARCH_WORD: "NotebookActionsEnum.ON_CHANGE_SEARCH_WORD",
    UPDATE_SEARCH_RESULT: "NotebookActionsEnum.UPDATE_SEARCH_RESULT",
}

const NotebookReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case NotebookActionsEnum.INIT:
            return update(state, { content: { $set: payload } });

        case NotebookActionsEnum.ON_CHANGE_SEARCH_WORD:
            return update(state, { searchWord: { $set: payload } });

        case NotebookActionsEnum.UPDATE_SEARCH_RESULT:
            return update(state, { searchResult: { $set: payload } });

        default:
            return state
    }
}

export default NotebookReducer;
export { NotebookActionsEnum };