import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ships from './ships'
import sides from './sides'

export default combineReducers({
  ships,
  sides,
  routing: routerReducer
})
