import RestService from '../RestService';
import { NotebookActionsEnum } from './NotebookReducer';

class NotebookActions {

    static initNotebook(dispatch, id) {
        RestService.get('notebook?id=' + id)
            .then(
                response => {
                    dispatch({ type: NotebookActionsEnum.INIT, payload: response.data });
                }
            )
    }

    static onChangeSearch(dispatch, event) {
        dispatch({ type: NotebookActionsEnum.ON_CHANGE_SEARCH_WORD, payload: event.currentTarget.value });
    }

    static onClickSearch(dispatch, idNotebook, searchWord) {
        RestService.get('notebook/search?idNotebook=' + idNotebook + '&searchWord=' + searchWord)
            .then(
                response => {
                    dispatch({ type: NotebookActionsEnum.UPDATE_SEARCH_RESULT, payload: response.data });
                }
            )
    }

}

export default NotebookActions;