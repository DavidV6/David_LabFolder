import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './Notifier.less';
import NotifierActions from './NotifierActions';

class Notifier extends Component {
    render() {
        if (!this.props.open) {
            return null;
        }

        const cls = "notifier " + this.props.type;
        return (
            <div className={cls}>
                <span id="closeIcon" onClick={this.props.closeNotifier}>
                    <i className="fas fa-times" />
                </span>
                {this.props.message}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    open: state.notifier.open,
    type: state.notifier.type,
    message: state.notifier.message,
})

const mapDispatchToProps = (dispatch) => {
    return {
        closeNotifier: () => NotifierActions.closeNotifier(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);