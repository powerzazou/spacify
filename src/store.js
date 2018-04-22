import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

// Default State
const initialState = {
  ships: {
    selectedShipId: null,
    shownShipId: null,
    shipList: []
  },
  sides: {
    selectedSideId: null,
    shownSideId: 1,
    sideList: [
      {id: 1, name: 'Light Side', image: 'light.png'},
      {id: 2, name: 'Dartk Side', image: 'dark.png'}
    ]
  },
  passengers: {
    selectedPassengersIds: [],
    shownPassengerId: null,
    passengerList: []
  },
  destinations: {
    selectedDestinationId: null,
    shownDestinationId: 9,
    destinationList: [
      {id: 9, name: 'Coruscant', climat: 'arid', gravity: '8,4N/KG', image: 'coruscant.png'},
      {id: 2, name: 'Earth', image: 'earth.png'},
      {id: 4, name: 'Hoth', image: 'hoth.png'},
      {id: 8, name: 'Naboo', image: 'naboo.png'},
      {id: 1, name: 'Tatooine', image: 'tatooine.png'},
      {id: 3, name: 'Yavin-4', image: 'yavin4.png'}
    ]
  }
}

const enhancers = []
const middleware = [
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
