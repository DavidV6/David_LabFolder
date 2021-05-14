import { TopBarActionsEnum } from "./TopBarReducer";

class TopBarActions {

    static changepage(dispatch, page) {
        return dispatch({ type: TopBarActionsEnum.UPDATE, payload: page });
    }

}

export default TopBarActions;