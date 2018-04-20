import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StatusView from './views/status'
import HomeView from './views/home/home'
import ShipSelection from './views/shipSelection'
import SideSelection from './views/sideSelection'
import PassengersSelection from './views/passengersSelection'
import DestinationSelection from './views/destinationSelection'
import TripOverview from './views/tripOverview'
import Confirmation from './views/confirmation'

import './app.css'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <Route exact path='/' component={HomeView} />

        <Route exact path='/ship-selection' component={ShipSelection} />
        <Route exact path='/side-selection' component={SideSelection} />
        <Route exact path='/passengers-selection' component={PassengersSelection} />
        <Route exact path='/destination-selection' component={DestinationSelection} />
        <Route exact path='/trip-overview' component={TripOverview} />
        <Route exact path='/confirmation' component={Confirmation} />
        <Route exact path='/admin/status' component={StatusView} />
      </div>
    )
  }
}

export default App
