import { CHANGE_SHOWN_SIDE, CHANGE_SELECTED_SIDE } from '../action-creators'

export default function ships (state = {}, action) {
  switch (action.type) {
    case CHANGE_SHOWN_SIDE: {
      const { id } = action
      return {...state, shownSideId: parseInt(id, 10)}
    }
    case CHANGE_SELECTED_SIDE: {
      const { id } = action
      return {...state, selectedSideId: parseInt(id, 10)}
    }
    default: {
      return state
    }
  }
}
