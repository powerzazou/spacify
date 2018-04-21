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
