import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NextStepComponent from '../common-components/nextStep'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
import * as actionCreators from '../action-creators'

class DestinationSelection extends Component {
  async changeShownDestination (destinationId) {
    const { ships, passengers } = this.props
    const requestBody = {
      starship_id: ships.selectedShipId,
      planet_id: parseInt(destinationId, 10),
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
      this.props.changeShownDestination(destinationId)
      this.props.setQuotationPrice({...quotation, ...requestBody, passengersId: passengers.selectedPassengersIds})
    } catch (e) {
      // TODO set une erreur dans le state et afficher
      console.error(e)
    }
  }
  render () {
    const destinations = this.props.destinations
    if (this.props.destinations.destinationList.length === 0) {
      return (
        <div className='shipSelectionView viewContainer'>
          <div className='viewTop'>
            <h1>Select your Destination</h1>
            <ProgressBarComponent progress={80} />
          </div>
          <div className='viewMiddle'>
            <PreviousStepComponent path='/passengers-selection' />
            <h2>Loading Destinations...</h2>
            <NextStepComponent disabled={!destinations.selectedDestinationId} path='/trip-overview' />
          </div>
          <div className='viewBottom' />
        </div>
      )
    } else {
      const shownDestination = destinations.destinationList.find((destination) => {
        return destination.id === destinations.shownDestinationId
      })
      const shownDestinationDetails = Object.keys(shownDestination).filter((property) => {
        return (property !== 'name' && property !== 'id' && property !== 'image')
      }).map((property) => {
        return { label: property, data: shownDestination[property] }
      })
      const itemListItems = destinations.destinationList.map((destination) => {
        const isSelected = destinations.selectedDestinationId === destination.id
        return {id: destination.id, isSelected: isSelected, source: `/assets/img-content/miniature/planet/${destination.id}.png`}
      })
      return (
        <div className='destinationSelectionView viewContainer'>
          <div className='viewTop'>
            <h1>Select your Destination</h1>
            <ProgressBarComponent progress={80} />
          </div>
          <div className='viewMiddle'>
            <PreviousStepComponent path='/passengers-selection' />
            <ItemDetailComponent
              id={shownDestination.id}
              name={shownDestination.name}
              image={`/assets/img-content/focus/planet/${shownDestination.id}.png`}
              details={shownDestinationDetails}
              isSelected={(shownDestination.id === destinations.selectedDestinationId)}
              onChoose={this.props.changeSelectedDestination}
              onUnselect={() => this.props.changeSelectedDestination(null)} />
            <NextStepComponent disabled={!destinations.selectedDestinationId} path='/trip-overview' />
          </div>
          <div className='viewBottom'>
            <ItemListComponent items={itemListItems} onChoose={(id) => this.changeShownDestination(id)} />
          </div>
        </div>
      )
    }
  }
  async componentDidMount () {
    if (this.props.destinations.destinationList.length === 0) {
      try {
        const supportedDestination = await window.fetch('https://test-pilote-prive.herokuapp.com/api/planets').then((response) => response.json())
        const destinations = await Promise.all(
          supportedDestination.map((destination) => {
            return window.fetch(`https://swapi.co/api/planets/${destination.id}/`).then((response) => response.json()).then((res) => {
              res.id = destination.id
              return res
            })
          }))
        const formatedDestination = destinations.map((destination) => {
          return {
            id: destination.id,
            name: destination.name,
            climat: destination.climate,
            gravity: destination.gravity,
            population: destination.population
          }
        })
        this.props.setDestinationList(formatedDestination)
        this.changeShownDestination(formatedDestination[0].id)
      } catch (e) {
        // TODO set une erreur dans le state et afficher
        console.error(e)
      }
    }
  }
}

const mapStateToProps = ({ ships, passengers, destinations }) => ({ ships, passengers, destinations })
const mapDispatchToProps = (dispatch) => {
  const { changeShownDestination, changeSelectedDestination, setDestinationList, setQuotationPrice } = actionCreators
  return bindActionCreators({ changeShownDestination, changeSelectedDestination, setDestinationList, setQuotationPrice }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationSelection)
