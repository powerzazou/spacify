import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NextStepComponent from '../../common-components/nextStep'
import PreviousStepComponent from '../../common-components/previousStep'
import ProgressBarComponent from '../../common-components/progressBar'
import ItemDetailComponent from '../../common-components/item-details/itemDetails'
import ItemListComponent from '../../common-components/item-list/itemList'
import * as actionCreators from '../../action-creators'

class ShipSelection extends Component {
  render () {
    const shownShip = this.props.ships.shipList.find((ship) => {
      return ship.id === this.props.ships.shownShipId
    })
    const showShipDetails = Object.keys(shownShip).filter((property) => {
      return (property !== 'name' && property !== 'id' && property !== 'image')
    }).map((property) => {
      return { label: property, data: shownShip[property] }
    })
    const itemListItems = this.props.ships.shipList.map((ship) => {
      const isSelected = this.props.ships.selectedSpaceshipId === ship.id
      return {id: ship.id, isSelected: isSelected, source: `/assets/img-content/miniature/spaceship/${ship.image}`}
    })
    return (
      <div className='shipSelectionView viewContainer'>
        <div className='viewTop'>
          <h1>Select Spaceship</h1>
          <ProgressBarComponent progress={20} />
        </div>
        <div className='viewMiddle'>
          <PreviousStepComponent path='/' />
          <ItemDetailComponent
            id={shownShip.id}
            name={shownShip.name}
            image={`/assets/img-content/focus/spaceship/${shownShip.image}`}
            details={showShipDetails}
            isSelected={(shownShip.id === this.props.ships.selectedSpaceshipId)}
            onChoose={this.props.changeSelectedSpaceship}
            onUnselect={() => this.props.changeSelectedSpaceship(null)} />
          <NextStepComponent disabled={!this.props.ships.selectedSpaceshipId} path='/side-selection' />
        </div>
        <div className='viewBottom'>
          <ItemListComponent items={itemListItems} onChoose={this.props.changeShownSpaceship} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ ships }) => ({ ships })
const mapDispatchToProps = (dispatch) => {
  const { changeShownSpaceship, changeSelectedSpaceship } = actionCreators
  return bindActionCreators({ changeShownSpaceship, changeSelectedSpaceship }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipSelection)
