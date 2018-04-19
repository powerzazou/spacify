import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NextStepComponent extends Component {
  render () {
    return (
      <button onClick={() => this.props.changePage(this.props.path)}>Next</button>
    )
  }
}

NextStepComponent.propTypes = {
  path: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePage: (path) => push(path)
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(NextStepComponent)
