import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import { push } from 'react-router-redux'

// import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
// import * as actionCreators from '../action-creators'

class TripOverview extends Component {
  render () {
    const { passengers, ships, destinations } = this.props
    const itemListItems = passengers.passengerList.filter((passenger) => {
      return passengers.selectedPassengersIds.includes(passenger.id)
    }).map((passenger) => {
      return {id: passenger.id, source: `/assets/img-content/miniature/perso/${passenger.id}.png`}
    })
    const selectedShip = ships.shipList.find(ship => ship.id === ships.selectedShipId)
    const selectedDestination = destinations.destinationList.find(destination => destination.id === destinations.selectedDestinationId)
    return (
      <div className='tripOverviewView viewContainer'>
        <div className='viewTop'>
          <h1>Your Trip</h1>
          <ProgressBarComponent progress={100} />
        </div>
        <div className='viewMiddle'>
          <PreviousStepComponent path='/destination-selection' />
          <div className='overview'>
            <div className='overviewLeft'>
              <img className='shipImage' src={`/assets/img-content/focus/spaceship/${selectedShip.id}.png`} />
              <ItemListComponent items={itemListItems} />
            </div>
            <div className='overviewRight'>
              <img className='destinationImage' src={`/assets/img-content/focus/planet/${selectedDestination.id}.png`} />
            </div>
          </div>
          <div className='rightEmptyColumn' />

        </div>
        <div className='viewBottom'>
          <button className='yellowButton' onClick={() => this.props.changePage('/confirmation')}>GO</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ passengers, destinations, ships }) => ({ passengers, destinations, ships })
const mapDispatchToProps = (dispatch) => {
  // const { changeShownSpaceship,  } = actionCreators
  return bindActionCreators({ changePage: (path) => push(path) }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripOverview)
