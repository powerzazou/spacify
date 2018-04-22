import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import { push } from 'react-router-redux'

// import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
import * as actionCreators from '../action-creators'

class TripOverview extends Component {
  async orderRide () {
    const { starship_id, planet_id, passengersId } = this.props.quotation
    const requestBody = {
      starship_id: starship_id,
      planet_id: planet_id,
      passengers: passengersId
    }
    try {
      const orderConfirmation = await window.fetch('https://test-pilote-prive.herokuapp.com/api/ride/order', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }).then((response) => response.json())
      this.props.setOrderConfirmation(orderConfirmation)
      this.props.changePage('/confirmation')
    } catch (e) {
      // TODO set une erreur dans le state et afficher
      console.error(e)
    }
    this.props.changePage('/confirmation')
  }
  render () {
    const { passengers, ships, destinations, quotation } = this.props
    const itemListItems = passengers.passengerList.filter((passenger) => {
      return quotation.passengersId.includes(passenger.id)
    }).map((passenger) => {
      return {id: passenger.id, source: `/assets/img-content/miniature/perso/${passenger.id}.png`}
    })
    const selectedShip = ships.shipList.find(ship => ship.id === quotation.starship_id)
    const selectedDestination = destinations.destinationList.find(destination => destination.id === quotation.planet_id)
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
          <button className='yellowButton' onClick={() => this.orderRide()}>{quotation.price} {quotation.currency} <br /> GO</button>
        </div>
      </div>
    )
  }
  async componentDidMount () {
    const { ships, passengers, destinations } = this.props
    const requestBody = {
      starship_id: ships.selectedShipId,
      planet_id: destinations.selectedDestinationId,
      passengers: passengers.selectedPassengersIds
    }
    try {
      const quotation = await window.fetch('https://test-pilote-prive.herokuapp.com/api/price/quote', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }).then((response) => response.json())
      this.props.setQuotationPrice({...quotation, ...requestBody, passengersId: passengers.selectedPassengersIds})
    } catch (e) {
      // TODO set une erreur dans le state et afficher
      console.error(e)
    }
  }
}

const mapStateToProps = ({ passengers, destinations, ships, quotation }) => ({ passengers, destinations, ships, quotation })
const mapDispatchToProps = (dispatch) => {
  const { setQuotationPrice, setOrderConfirmation } = actionCreators
  return bindActionCreators({ setQuotationPrice, setOrderConfirmation, changePage: (path) => push(path) }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripOverview)
