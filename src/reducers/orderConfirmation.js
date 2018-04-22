import { SET_ORDER_CONFIRMATION } from '../action-creators'

export default function orderConfirmation (state = {}, action) {
  switch (action.type) {
    case SET_ORDER_CONFIRMATION: {
      const { order } = action
      return order
    }
    default: {
      return state
    }
  }
}
