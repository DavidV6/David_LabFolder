import { combineReducers, createStore } from 'redux';
import homepage from '../home/HomepageReducer';
import account from '../account/AccountReducer';
import topbar from '../components/TopBarReducer';

const rootReducer = combineReducers({
    homepage,
    account,
    topbar,
});

const store = createStore(rootReducer);

export default store;