import React, { Component } from 'react'
import PreviousStepComponent from '../components/previousStep'
import NextStepComponent from '../components/nextStep'

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
