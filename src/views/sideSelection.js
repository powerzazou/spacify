import React, { Component } from 'react'
import PreviousStepComponent from '../components/previousStep'
import NextStepComponent from '../components/nextStep'

export default class ShipSelection extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Select your Side</h1>
        <PreviousStepComponent path='/ship-selection' />
        <NextStepComponent path='/passengers-selection' />
      </div>
    )
  }
}
