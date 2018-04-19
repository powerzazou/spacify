import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class HomeView extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Bienvenu sur Pilote Privé ! </h1>
        <button onClick={() => this.props.changePage()}>Reserver un pilote</button>
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
