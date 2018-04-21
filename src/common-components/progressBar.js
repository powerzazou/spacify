
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProgressBarComponent extends Component {
  render () {
    return (
      <div style={{width: '100px', height: '3px', 'backgroundColor': 'rgb(255, 255, 255, 0.3)'}}>
        <div style={{width: `${this.props.progress}px`, height: '3px', 'backgroundColor': '#ffffff'}} />
      </div>
    )
  }
}

ProgressBarComponent.propTypes = {
  progress: PropTypes.number.isRequired
}
