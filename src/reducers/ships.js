import { CHANGE_SHOWN_SPACESHIP, CHANGE_SELECTED_SPACESHIP, SET_SPACESHIP_LIST } from '../action-creators'

export default function ships (state = {}, action) {
  switch (action.type) {
    case CHANGE_SHOWN_SPACESHIP: {
      const { id } = action
      return {...state, shownShipId: parseInt(id, 10)}
    }
    case CHANGE_SELECTED_SPACESHIP: {
      const { id } = action
      return {...state, selectedShipId: parseInt(id, 10)}
    }
    case SET_SPACESHIP_LIST: {
      const { list } = action
      const shownShipId = list[0].id
      return {...state, shipList: list, shownShipId: parseInt(shownShipId, 10)}
    }
    default: {
      return state
    }
  }
}
