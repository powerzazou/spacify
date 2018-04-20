import React, { Component } from 'react'
import NextStepComponent from '../../common-components/nextStep'
import PreviousStepComponent from '../../common-components/previousStep'
import ItemDetailComponent from '../../common-components/item-details/itemDetails'

export default class ShipSelection extends Component {
  render () {
    const details = [{label: 'Capacity', data: 2}, {label: 'Manufacturer', data: 'Corporation Incom'}, {label: 'Model', data: 'T-65'}]
    return (
      <div className='shipSelectionView viewContainer'>
        <div className='viewTop'>
          <h1>Select Spaceship</h1>
        </div>
        <div className='viewMiddle'>
          <PreviousStepComponent path='/' />
          <ItemDetailComponent name='X-Wing' image='/assets/img-content/miniature/spaceship/x-wing.png' details={details} />
          <NextStepComponent path='/side-selection' />
        </div>
        <div className='viewBottom'>
          <button className='yellowButton' onClick={() => this.props.changePage()}>Book a flight</button>
        </div>
      </div>
    )
  }
}
