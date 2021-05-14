import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/js/all';

import '../less/main.less';

import store from './store/store.js';

import MasterPage from './MasterPage.jsx';

const Main = function (props) {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" component={MasterPage} />
                </Switch>
            </HashRouter>
        </Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById('main-react-app'));

if (module.hot) {
    module.hot.accept();
}