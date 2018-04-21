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
    if (!props.sides.selectedSideId) {
      props.changePage('/')
    }
  }
  render () {
    const shownPassenger = this.props.passengers.passengerList.find((passenger) => {
      return passenger.id === this.props.passengers.shownPassengerId
    })
    const shownPassengerDetails = Object.keys(shownPassenger).filter((property) => {
      return (property !== 'name' && property !== 'id' && property !== 'image' && property !== 'side')
    }).map((property) => {
      return { label: property, data: shownPassenger[property] }
    })
    const itemListItems = this.props.passengers.passengerList.filter((passenger) => {
      return passenger.side === this.props.sides.selectedSideId
    }).map((passenger) => {
      const isSelected = this.props.passengers.selectedPassengersIds.includes(passenger.id)
      return {id: passenger.id, isSelected: isSelected, source: `/assets/img-content/miniature/perso/${passenger.image}`}
    })
    return (
      <div className='passengerselectionView viewContainer'>
        <div className='viewTop'>
          <h1>Select Passenger</h1>
          <ProgressBarComponent progress={60} />
        </div>
        <div className='viewMiddle'>
          <PreviousStepComponent path='/side-selection' />
          <ItemDetailComponent
            id={shownPassenger.id}
            name={shownPassenger.name}
            image={`/assets/img-content/focus/perso/${shownPassenger.image}`}
            details={shownPassengerDetails}
            isSelected={(this.props.passengers.selectedPassengersIds.includes(shownPassenger.id))}
            onChoose={this.props.addSelectedPassenger}
            onUnselect={this.props.removeSelectedPassenger} />
          <NextStepComponent disabled={!this.props.passengers.selectedPassengerId} path='/destination-selection' />
        </div>
        <div className='viewBottom'>
          <ItemListComponent items={itemListItems} onChoose={this.props.changeShownPassenger} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ passengers, sides }) => ({ passengers, sides })
const mapDispatchToProps = (dispatch) => {
  const { changeShownPassenger, addSelectedPassenger, removeSelectedPassenger } = actionCreators
  return bindActionCreators({ changeShownPassenger, addSelectedPassenger, removeSelectedPassenger, changePage: (path) => push(path) }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengersSelection)
