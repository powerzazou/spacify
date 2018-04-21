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
    shownShipId: 1,
    shipList: [
      {id: 1, name: 'X-Wing', capacity: 2, manufacturer: 'Corporation Incom', model: 'T-65', width: '12.5m', image: 'x-wing.png'},
      {id: 2, name: 'Milenium', capacity: 2, manufacturer: 'Corporation Incom', model: 'T-65', width: '12.5m', image: 'milenium.png'},
      {id: 3, name: 'Arc100', capacity: 2, manufacturer: 'Corporation Incom', model: 'T-65', width: '12.5m', image: 'arc100.png'},
      {id: 4, name: 'Imperial', capacity: 2, manufacturer: 'Corporation Incom', model: 'T-65', width: '12.5m', image: 'imperial.png'},
      {id: 5, name: 'Y-Wing', capacity: 2, manufacturer: 'Corporation Incom', model: 'T-65', width: '12.5m', image: 'y-wing.png'}
    ]
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
    shownPassengerId: 1,
    passengerList: [
      {id: 1, name: 'Yoda', side: 1, image: 'yoda.png', eyes: 'blue', gendre: 'male'},
      {id: 2, name: 'Anakin', side: 1, image: 'anakin.png'},
      {id: 3, name: 'Han', side: 1, image: 'hansolo.png'},
      {id: 4, name: 'Chewee', side: 1, image: 'chewee.png'},
      {id: 5, name: 'Leia', side: 1, image: 'leia.png'},
      {id: 6, name: 'Ackbar', side: 1, image: 'ackbar.png'},
      {id: 7, name: 'Boba Fett', side: 2, image: 'bobafett.png'},
      {id: 8, name: 'Dark Vador', side: 2, image: 'darkvador.png'},
      {id: 9, name: 'Darth Maul', side: 2, image: 'darthmaul.png'},
      {id: 10, name: 'Tarkin', side: 2, image: 'grandmoff.png'},
      {id: 11, name: 'Grievous', side: 2, image: 'grievous.png'},
      {id: 12, name: 'Palpatine', side: 2, image: 'palpatine.png'}
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
