import { CHANGE_SHOWN_DESTINATION, CHANGE_SELECTED_DESTINATION, SET_DESTINATION_LIST } from '../action-creators'

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
    case SET_DESTINATION_LIST: {
      const { list } = action
      const shownDestinationId = list[0].id
      return {...state, destinationList: list, shownDestinationId}
    }
    default: {
      return state
    }
  }
}
