import { CHANGE_SHOWN_SPACESHIP, CHANGE_SELECTED_SPACESHIP } from '../action-creators'

export default function ships (state = {}, action) {
  switch (action.type) {
    case CHANGE_SHOWN_SPACESHIP: {
      const { id } = action
      return {...state, shownShipId: parseInt(id, 10)}
    }
    case CHANGE_SELECTED_SPACESHIP: {
      const { id } = action
      return {...state, selectedSpaceshipId: parseInt(id, 10)}
    }
    default: {
      return state
    }
  }
}
