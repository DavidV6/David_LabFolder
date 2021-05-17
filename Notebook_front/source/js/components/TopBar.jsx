import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import LabFolder from '../../images/LabFolder.png';
import './TopBar.less';
import TopBarActions from './TopBarActions';
import { TopBarActionsEnum } from './TopBarReducer';

const MenuLink = function ({ children, to, onClickMenuLink, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Link onClick={onClickMenuLink} className={" topbar-link " + (match ? "active" : "")} to={to}>{children}</Link>
    );
}



class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                <img id="topbar-icon" src={LabFolder} />
                <span id="topbar-title" className="ml-5">
                    <i className="fas fa-book mr-1" />
                    {this.props.pageTitle}
                </span>
                <div id="topbar-content">
                    <div id="topbar-menu">
                        <MenuLink to="/homepage" onClickMenuLink={() => this.props.changepage("Notebooks List")}>
                            <i className="fas fa-book-reader" />
                            Notebooks List
                        </MenuLink>
                        <MenuLink to="/notebook" onClickMenuLink={() => this.props.changepage("Notebook")}>
                            <i className="fas fa-book" />
                            Notebook
                        </MenuLink>
                        <MenuLink to="/manage">
                            <i className="fas fa-cogs" />
                            Manage
                        </MenuLink>
                        <MenuLink to="/dashboard">
                            <i className="fab fa-flipboard" />
                            Dashboard
                        </MenuLink>
                    </div>
                    <div id="topbar-user">
                        <div aria-label="search" data-balloon-pos="down">
                            <i className="fas fa-search"></i>
                        </div>
                        <div aria-label="1 warning" data-balloon-pos="down">
                            <i className="fas fa-bell"></i>
                        </div>
                        <button>
                            {this.props.account.username}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    account: state.account,
    pageTitle: state.topbar.pageTitle
})

const mapDispatchToProps = (dispatch) => {
    return {
        changepage: (page) => TopBarActions.changepage(dispatch, page),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);