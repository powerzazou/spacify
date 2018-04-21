import { CHANGE_SHOWN_DESTINATION, CHANGE_SELECTED_DESTINATION } from '../action-creators'

export default function destinations (state = {}, action) {
  switch (action.type) {
    case CHANGE_SHOWN_DESTINATION: {
      const { id } = action
      return {...state, shownDestinationId: parseInt(id, 10)}
    }
    case CHANGE_SELECTED_DESTINATION: {
      const { id } = action
      return {...state, selectedDestinationId: parseInt(id, 10)}
    }
    default: {
      return state
    }
  }
}
