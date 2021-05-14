import React, { Component } from 'react'
import { connect } from 'react-redux'

class Notebook extends Component {
    render() {
        return (
            <div style={{ padding: '0rem 2rem' }}>
                <div style={{ height: '6rem', backgroundColor: 'lightskyblue' }} />
                <div style={{ backgroundColor: 'lightgrey' }}>
                    <div id="content">

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);