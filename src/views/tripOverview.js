import React, { Component } from 'react'
import PreviousStepComponent from '../components/previousStep'

export default class TripOverview extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Your Trip</h1>
        <PreviousStepComponent path='/destination-selection' />
        <button>GO</button>
      </div>
    )
  }
}
