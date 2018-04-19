import React, { Component } from 'react'
import NextStepComponent from '../components/nextStep'

export default class ShipSelection extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Select Spaceship</h1>
        <NextStepComponent path='/side-selection' />
      </div>
    )
  }
}
