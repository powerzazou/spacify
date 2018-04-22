import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ships from './ships'
import sides from './sides'
import passengers from './passengers'
import destinations from './destinations'
import quotation from './quotations'
import orderConfirmation from './orderConfirmation'
import { SET_QUOTATION_PRICE } from '../action-creators'

const coreReducer = combineReducers({
  ships,
  sides,
  passengers,
  destinations,
  quotation,
  orderConfirmation,
  routing: routerReducer
})

function spacifyReducer (state = coreReducer(undefined, {}), action) {
  switch (action.type) {
    case SET_QUOTATION_PRICE:
      return setQuotationPrice(state, action)
    default:
      return coreReducer(state, action)
  }
}

function setQuotationPrice (state, action) {
  switch (action.type) {
    case SET_QUOTATION_PRICE:
      const {quotation} = action
      const destinations = {...state.destinations}
      destinations.destinationList.find((planet) => quotation.planet_id === planet.id).price = quotation.price + ' ' + quotation.currency
      return {
        ...state,
        destinations,
        quotation
      }
    default:
      return state
  }
}

export default spacifyReducer
