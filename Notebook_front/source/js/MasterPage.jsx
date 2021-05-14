import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import TopBar from './components/TopBar.jsx';
import Homepage from './home/Homepage.jsx';

const MasterRoute = function () {
    return (
        <Switch>
            <Route path="/homepage" component={Homepage} />
            <Route path="/notebook" />
            <Redirect from="/" to="homepage" />
        </Switch>
    )
}

export default class MasterPage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
                <TopBar />
                <div id="masterpage-content">
                    <MasterRoute />
                </div>
            </div>
        )
    }
}
