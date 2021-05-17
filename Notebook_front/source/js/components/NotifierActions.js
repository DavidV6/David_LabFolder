import { NotifierActionsEnum } from "./NotifierReducer";

class NotifierActions {

    static addNotifier(dispatch, type, message) {
        dispatch({ type: NotifierActionsEnum.INIT, payload: { type: type, message: message } });
    }

    static closeNotifier(dispatch) {
        dispatch({ type: NotifierActionsEnum.CLOSE })
    }

}

export default NotifierActions;