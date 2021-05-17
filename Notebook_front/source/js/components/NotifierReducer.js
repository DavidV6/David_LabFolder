import update from 'immutability-helper';

const initialState = {
    open: false,
    type: '',
    message: '',
}

const NotifierActionsEnum = {
    INIT: "NotifierActionsEnum.INIT",
    CLOSE: "NotifierActionsEnum.CLOSE",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case NotifierActionsEnum.INIT:
            return update(state, {
                open: { $set: true },
                type: { $set: payload.type },
                message: { $set: payload.message }
            })

        case NotifierActionsEnum.CLOSE:
            return update(state, { open: { $set: false } });

        default:
            return state
    }
}

export { NotifierActionsEnum };