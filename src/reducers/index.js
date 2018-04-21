import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ships from './ships'
import sides from './sides'
import passengers from './passengers'
import destinations from './destinations'

export default combineReducers({
  ships,
  sides,
  passengers,
  destinations,
  routing: routerReducer
})
