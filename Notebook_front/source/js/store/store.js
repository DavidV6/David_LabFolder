import { combineReducers, createStore } from 'redux';
import homepage from '../home/HomepageReducer';
import account from '../account/AccountReducer';
import topbar from '../components/TopBarReducer';
import notebook from '../Notebook/NotebookReducer';
import notifier from '../components/NotifierReducer';

const rootReducer = combineReducers({
    homepage,
    account,
    topbar,
    notifier,
    notebook,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;