import React, { Component } from 'react'
import PreviousStepComponent from '../common-components/previousStep'
import NextStepComponent from '../common-components/nextStep'

export default class DestinationSelection extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Select your destination</h1>
        <PreviousStepComponent path='/passengers-selection' />
        <NextStepComponent path='/trip-overview' />
      </div>
    )
  }
}
