import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ships from './ships'

export default combineReducers({
  ships,
  routing: routerReducer
})
