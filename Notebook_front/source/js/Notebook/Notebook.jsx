import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Notebook.less';
import NotebookActions from './NotebookActions';
import NotifierActions from '../components/NotifierActions';

class Notebook extends Component {

    componentDidMount() {
        if (this.props.history.location.state && this.props.history.location.state.notebookId) {
            this.props.initNotebook(this.props.history.location.state.notebookId);
        } else {
            this.props.addNotifier("warning", "Select a notebook to open");
            this.props.history.push('homepage');
        }
    }

    render() {
        let that = this;
        return (
            <div id="notebook-content">
                <div className="notebook-content-holder">

                    <div className="notebook-content-filter right">
                        <div aria-label="click here to search"
                            data-balloon-pos="down"
                            onClick={() => this.props.onClickSearch(this.props.idNotebook, this.props.searchWord)}>
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="text"
                            placeholder="search"
                            value={this.props.searchWord}
                            onChange={this.props.onChangeSearch} />
                    </div>
                    <pre className="notebook-content-container">
                        {this.props.content.text}
                    </pre>
                </div>

                <div className="notebook-content-holder">
                    <div className="notebook-content-filter center">
                        <span>
                            Results
                        </span>
                    </div>
                    <div className="notebook-content-container">
                        <span>
                            The frequency of the word <b>"{this.props.searchWord}"</b> is:
                            {this.props.searchResult ? " " + this.props.searchResult.numberOfWords : " "}
                        </span>
                        <br />
                        <span>
                            The list of similar words is:
                        </span>
                        <br />
                        {
                            this.props.searchResult && this.props.searchResult.similarWords &&
                            this.props.searchResult.similarWords.map(function (element, idx) {
                                let insertComma = that.props.searchResult.similarWords.length - 1 !== idx ? true : false;
                                return <span key={idx}>
                                    {element} {insertComma && " , "}
                                </span>
                            })
                        }
                    </div>
                </div>

                <div className="notebook-content-holder left">
                    <div className="notebook-content-filter">
                        <span>
                            Graphs
                        </span>
                    </div>
                    <div className="notebook-content-container">
                    </div>
                </div>

                <div className="notebook-content-holder left">
                    <div className="notebook-content-filter">
                        <span>
                            Statistics
                        </span>
                    </div>
                    <div className="notebook-content-container">
                    </div>
                </div >

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    idNotebook: state.notebook.content.id,
    content: state.notebook.content,
    searchWord: state.notebook.searchWord,
    searchResult: state.notebook.searchResult,
})

const mapDispatchToProps = (dispatch) => {
    return {
        addNotifier: (type, message) => NotifierActions.addNotifier(dispatch, type, message),
        initNotebook: (notebookId) => NotebookActions.initNotebook(dispatch, notebookId),
        onChangeSearch: (event) => NotebookActions.onChangeSearch(dispatch, event),
        onClickSearch: (idNotebook, searchWord) => NotebookActions.onClickSearch(dispatch, idNotebook, searchWord),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);