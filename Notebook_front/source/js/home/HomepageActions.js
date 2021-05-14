import RestService from "../RestService";
import { HomepageActionsEnum } from "./HomepageReducer";

class HomepageActions {

    static initHomepage(dispatch) {
        RestService.get('notebooks').then(
            response => {
                console.log(response.data);
                dispatch({ type: HomepageActionsEnum.INIT, payload: response.data })
            }
        )
    }

}

export default HomepageActions;