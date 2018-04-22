import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './home/home.css'

class ConfirmationView extends Component {
  render () {
    return (
      <div className='homeView viewContainer'>
        <div className='viewTop'>
          <h1>Thanks, your trip is planned</h1>
        </div>
        <div className='viewMiddle'>
          <h2>May the force be with you !</h2>
        </div>
        <div className='viewBottom'>
          <button className='yellowButton' onClick={() => this.props.changePage()}>Restart</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePage: () => push('/')
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ConfirmationView)
