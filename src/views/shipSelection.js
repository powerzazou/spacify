import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NextStepComponent from '../common-components/nextStep'
import PreviousStepComponent from '../common-components/previousStep'
import ProgressBarComponent from '../common-components/progressBar'
import ItemDetailComponent from '../common-components/item-details/itemDetails'
import ItemListComponent from '../common-components/item-list/itemList'
import * as actionCreators from '../action-creators'

class ShipSelection extends Component {
  render () {
    if (this.props.ships.shipList.length === 0) {
      return (
        <div className='shipSelectionView viewContainer'>
          <div className='viewTop'>
            <h1>Select Spaceship</h1>
            <ProgressBarComponent progress={20} />
          </div>
          <div className='viewMiddle'>
            <PreviousStepComponent path='/' />
            <h2>Loading Ships...</h2>
            <NextStepComponent disabled={!this.props.ships.selectedShipId} path='/side-selection' />
          </div>
          <div className='viewBottom' />
        </div>
      )
    } else {
      const shownShip = this.props.ships.shipList.find((ship) => {
        return ship.id === this.props.ships.shownShipId
      })
      const showShipDetails = Object.keys(shownShip).filter((property) => {
        return (property !== 'name' && property !== 'id' && property !== 'image')
      }).map((property) => {
        return { label: property, data: shownShip[property] }
      })
      const itemListItems = this.props.ships.shipList.map((ship) => {
        const isSelected = this.props.ships.selectedShipId === ship.id
        return {id: ship.id, isSelected: isSelected, source: `/assets/img-content/miniature/spaceship/${ship.id}.png`}
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
              image={`/assets/img-content/focus/spaceship/${shownShip.id}.png`}
              details={showShipDetails}
              isSelected={(shownShip.id === this.props.ships.selectedShipId)}
              onChoose={this.props.changeSelectedSpaceship}
              onUnselect={() => this.props.changeSelectedSpaceship(null)} />
            <NextStepComponent disabled={!this.props.ships.selectedShipId} path='/side-selection' />
          </div>
          <div className='viewBottom'>
            <ItemListComponent items={itemListItems} onChoose={this.props.changeShownSpaceship} />
          </div>
        </div>
      )
    }
  }
  async componentDidMount () {
    if (this.props.ships.shipList.length === 0) {
      try {
        const supportedStarship = await window.fetch('https://test-pilote-prive.herokuapp.com/api/starships').then((response) => response.json())
        const starships = await Promise.all(
          supportedStarship.map((starship) => {
            return window.fetch(`https://swapi.co/api/starships/${starship.id}/`).then((response) => response.json()).then((res) => {
              res.id = starship.id
              return res
            })
          }))
        const formatedStarships = starships.map((ship) => {
          return {
            id: ship.id,
            name: ship.name,
            capacity: parseInt(ship.passengers, 10),
            manufacturer: ship.manufacturer,
            model: ship.model,
            length: ship.length
          }
        })
        this.props.setSpaceshipList(formatedStarships)
      } catch (e) {
        // TODO set une erreur dans le state et afficher
        console.error(e)
      }
    }
  }
}

const mapStateToProps = ({ ships }) => ({ ships })
const mapDispatchToProps = (dispatch) => {
  const { changeShownSpaceship, changeSelectedSpaceship, setSpaceshipList } = actionCreators
  return bindActionCreators({ changeShownSpaceship, changeSelectedSpaceship, setSpaceshipList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipSelection)
