import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './home.css'

class HomeView extends Component {
  render () {
    return (
      <div className='homeView viewContainer'>
        <div className='viewTop'>
          <h1>Welcome on Private-Pilote !</h1>
        </div>
        <div className='viewMiddle'>
          <h2>Hello</h2>
        </div>
        <div className='viewBottom'>
          <button className='yellowButton' onClick={() => this.props.changePage()}>Book a flight</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePage: () => push('/ship-selection')
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeView)
