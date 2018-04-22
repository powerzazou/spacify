import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NextStepComponent from '../common-components/nextStep'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
import * as actionCreators from '../action-creators'
import { push } from 'react-router-redux'

class PassengersSelection extends Component {
  constructor (props) {
    super(props)
    if (!props.sides.selectedSideId || !this.props.ships.selectedShipId) {
      props.changePage('/')
    }
  }
  render () {
    const passengers = this.props.passengers
    const maxAllowedPassengers = this.props.ships.shipList.find(ship => this.props.ships.selectedShipId === ship.id).capacity
    if (this.props.passengers.passengerList.length === 0) {
      return (
        <div className='shipSelectionView viewContainer'>
          <div className='viewTop'>
            <h1>Select Passenger</h1>
            <ProgressBarComponent progress={60} />
          </div>
          <div className='viewMiddle'>
            <PreviousStepComponent path='/side-selection' />
            <h2>Loading Passengers...</h2>
            <NextStepComponent disabled={!(passengers.selectedPassengersIds.length <= maxAllowedPassengers)} path='/destination-selection' />
          </div>
          <div className='viewBottom' />
        </div>
      )
    } else {
      let shownPassenger = passengers.passengerList.find((passenger) => passenger.id === passengers.shownPassengerId)
      if (shownPassenger.side !== this.props.sides.selectedSideId) {
        shownPassenger = passengers.passengerList.find((passenger) => passenger.side === this.props.sides.selectedSideId)
      }
      const shownPassengerDetails = Object.keys(shownPassenger).filter((property) => {
        return (property !== 'name' && property !== 'id' && property !== 'image' && property !== 'side')
      }).map((property) => {
        return { label: property, data: shownPassenger[property] }
      })
      const itemListItems = passengers.passengerList.filter((passenger) => {
        return passenger.side === this.props.sides.selectedSideId
      }).map((passenger) => {
        const isSelected = passengers.selectedPassengersIds.includes(passenger.id)
        return {id: passenger.id, isSelected: isSelected, source: `/assets/img-content/miniature/perso/${passenger.id}.png`}
      })
      return (
        <div className='passengerselectionView viewContainer'>
          <div className='viewTop'>
            <h1>Select Passenger</h1>
            <ProgressBarComponent progress={60} />
            <p>{passengers.selectedPassengersIds.length}/{maxAllowedPassengers}</p>
          </div>
          <div className='viewMiddle'>
            <PreviousStepComponent path='/side-selection' />
            <ItemDetailComponent
              id={shownPassenger.id}
              name={shownPassenger.name}
              image={`/assets/img-content/focus/perso/${shownPassenger.id}.png`}
              details={shownPassengerDetails}
              isSelected={(passengers.selectedPassengersIds.includes(shownPassenger.id))}
              onChoose={this.props.addSelectedPassenger}
              onUnselect={this.props.removeSelectedPassenger} />
            <NextStepComponent disabled={!(passengers.selectedPassengersIds.length <= maxAllowedPassengers && passengers.selectedPassengersIds.length > 0)} path='/destination-selection' />
          </div>
          <div className='viewBottom'>
            <ItemListComponent items={itemListItems} onChoose={this.props.changeShownPassenger} />
          </div>
        </div>
      )
    }
  }
  async componentDidMount () {
    if (this.props.passengers.passengerList.length === 0) {
      try {
        const supportedPassengers = await window.fetch('https://test-pilote-prive.herokuapp.com/api/passengers').then((response) => response.json())
        const passengers = await Promise.all(
          supportedPassengers.map((passenger) => {
            return window.fetch(`https://swapi.co/api/people/${passenger.id}/`).then((response) => response.json()).then((res) => {
              res.id = passenger.id
              res.side = passenger.side === 'light' ? 1 : 2
              return res
            })
          }))

        const formatedPassengers = passengers.map((passenger) => {
          return {
            id: passenger.id,
            name: passenger.name,
            eyes: passenger.eye_color,
            gender: passenger.gender,
            hair: passenger.hair_color,
            height: passenger.height,
            mass: passenger.mass,
            side: passenger.side
          }
        })
        this.props.setPassengerList(formatedPassengers)
      } catch (e) {
        // TODO set une erreur dans le state et afficher
        console.error(e)
      }
    }
  }
}

const mapStateToProps = ({ passengers, sides, ships }) => ({ passengers, sides, ships })
const mapDispatchToProps = (dispatch) => {
  const { changeShownPassenger, addSelectedPassenger, removeSelectedPassenger, setPassengerList } = actionCreators
  return bindActionCreators({ changeShownPassenger, addSelectedPassenger, removeSelectedPassenger, setPassengerList, changePage: (path) => push(path) }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengersSelection)
