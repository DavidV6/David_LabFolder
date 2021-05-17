import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Homepage.less';
import HomepageActions from './HomepageActions';

class Homepage extends Component {

    componentDidMount() {
        this.props.initHomepage();
    }

    openNotebook(notebookId) {
        this.props.history.push({ pathname: 'notebook', state: { notebookId: notebookId } });
    }

    render() {
        let that = this;
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
                            <tbody>
                                <tr>
                                    <th>Notebook Name</th>
                                    <th>User</th>
                                    <th>Date</th>
                                </tr>
                                {this.props.listNotebooks.map(function (notebook, idx) {
                                    return (<tr key={idx}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => that.openNotebook(notebook.id)}>
                                        <td>{notebook.noteBookName}</td>
                                        <td>{notebook.userName}</td>
                                        <td>{notebook.dateUpdated}</td>
                                    </tr>)
                                })}
                            </tbody>
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
        initHomepage: () => HomepageActions.initHomepage(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
