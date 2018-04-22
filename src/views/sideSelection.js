import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NextStepComponent from '../common-components/nextStep'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
import * as actionCreators from '../action-creators'

class SideSelection extends Component {
  changeSelectedSide (sideId) {
    this.props.changeSelectedSide(sideId)
    this.props.removeAllSelectedPassengers()
  }
  render () {
    const shownSide = this.props.sides.sideList.find((side) => {
      return side.id === this.props.sides.shownSideId
    })
    const shownSideDetails = Object.keys(shownSide).filter((property) => {
      return (property !== 'name' && property !== 'id' && property !== 'image')
    }).map((property) => {
      return { label: property, data: shownSide[property] }
    })
    const itemListItems = this.props.sides.sideList.map((side) => {
      const isSelected = this.props.sides.selectedSideId === side.id
      return {id: side.id, isSelected: isSelected, source: `/assets/img-content/miniature/side/${side.image}`}
    })
    return (
      <div className='sideSelectionView viewContainer'>
        <div className='viewTop'>
          <h1>Select your Side</h1>
          <ProgressBarComponent progress={40} />
        </div>
        <div className='viewMiddle'>
          <PreviousStepComponent path='/ship-selection' />
          <ItemDetailComponent
            id={shownSide.id}
            name={shownSide.name}
            image={`/assets/img-content/focus/side/${shownSide.image}`}
            details={shownSideDetails}
            isSelected={(shownSide.id === this.props.sides.selectedSideId)}
            onChoose={(sideId) => this.changeSelectedSide(sideId)}
            onUnselect={() => this.props.changeSelectedSide(null)} />
          <NextStepComponent disabled={!this.props.sides.selectedSideId} path='/passengers-selection' />
        </div>
        <div className='viewBottom'>
          <ItemListComponent items={itemListItems} onChoose={this.props.changeShownSide} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sides, passengers }) => ({ sides, passengers })
const mapDispatchToProps = (dispatch) => {
  const { changeShownSide, changeSelectedSide, changeShownPassenger, removeAllSelectedPassengers } = actionCreators
  return bindActionCreators({ changeShownSide, changeSelectedSide, changeShownPassenger, removeAllSelectedPassengers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideSelection)
