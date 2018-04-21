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
  render () {
    const destinations = this.props.destinations
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
      return {id: destination.id, isSelected: isSelected, source: `/assets/img-content/miniature/planet/${destination.image}`}
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
            image={`/assets/img-content/focus/planet/${shownDestination.image}`}
            details={shownDestinationDetails}
            isSelected={(shownDestination.id === destinations.selectedDestinationId)}
            onChoose={this.props.changeSelectedDestination}
            onUnselect={() => this.props.changeSelectedDestination(null)} />
          <NextStepComponent disabled={!destinations.selectedDestinationId} path='/trip-overview' />
        </div>
        <div className='viewBottom'>
          <ItemListComponent items={itemListItems} onChoose={this.props.changeShownDestination} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ destinations }) => ({ destinations })
const mapDispatchToProps = (dispatch) => {
  const { changeShownDestination, changeSelectedDestination } = actionCreators
  return bindActionCreators({ changeShownDestination, changeSelectedDestination }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationSelection)
