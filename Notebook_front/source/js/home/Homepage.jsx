import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Homepage.less';
import HomepageActions from './HomepageActions';

class Homepage extends Component {

    componentDidMount() {
        this.props.initHomepage();
    }

    render() {
        return (
            <div id="homepage">
                <div id="homepage-table">
                    <div id="homepage-table-search">
                        <div className="mr-2" aria-label="create new notebook" data-balloon-pos="down">
                            <i className="far fa-plus-square" style={{ color: 'white' }} />
                        </div>
                        <span>
                            <input type="text" placeholder="search"></input>
                        </span>
                    </div>

                    <div id="homepage-table-content">
                        <table>
                            <tr>
                                <th>Notebook Name</th>
                                <th>User</th>
                                <th>Date</th>
                            </tr>
                            {this.props.listNotebooks.map(function (notebook, idx) {
                                return (<tr>
                                    <td>{notebook.noteBookName}</td>
                                    <td>{notebook.userName}</td>
                                    <td>{notebook.dateUpdated}</td>
                                </tr>)
                            })}
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listNotebooks: state.homepage.listNotebooks
})

const mapDispatchToProps = (dispatch) => {
    return {
        initHomepage: () => HomepageActions.initHomepage(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
