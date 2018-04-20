import React, { Component } from 'react'
import PreviousStepComponent from '../components/previousStep'
import NextStepComponent from '../components/nextStep'

export default class PassengersSelection extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Select your Passengers</h1>
        <PreviousStepComponent path='/side-selection' />
        <NextStepComponent path='/destination-selection' />
      </div>
    )
  }
}