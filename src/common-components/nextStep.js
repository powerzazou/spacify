import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './nextStep.css'

class NextStepComponent extends Component {
  render () {
    return (
      <button className='nextStepButton' onClick={() => this.props.changePage(this.props.path)}>
        Next
        <svg width='75px' height='9px' viewBox='0 0 75 9' version='1.1' xmlns='http://www.w3.org/2000/svg'>
          <title>Line</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g id='03.-Passengers' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(-1289.000000, -384.000000)'>
            <g id='Next' transform='translate(1289.000000, 361.000000)' stroke='#FFE818' stroke-width='2'>
              <path d='M0,27.5 L70.5,27.5' id='Line' />
              <path id='Line-decoration-1' d='M59.7,30.5 L70.5,27.5 L59.7,24.5' />
            </g>
          </g>
        </svg>
      </button>
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
