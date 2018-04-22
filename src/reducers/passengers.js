import { CHANGE_SHOWN_PASSENGER, ADD_SELECTED_PASSENGER, REMOVE_SELECTED_PASSENGER, REMOVE_ALL_SELECTED_PASSENGERS, SET_PASSENGER_LIST } from '../action-creators'

export default function passengers (state = {}, action) {
  switch (action.type) {
    case CHANGE_SHOWN_PASSENGER: {
      const { id } = action
      return {...state, shownPassengerId: parseInt(id, 10)}
    }
    case ADD_SELECTED_PASSENGER: {
      const { id } = action
      const newSelectedPassengersIds = [...state.selectedPassengersIds]
      newSelectedPassengersIds.push(id)
      return {...state, selectedPassengersIds: newSelectedPassengersIds}
    }
    case REMOVE_SELECTED_PASSENGER: {
      const { id } = action
      const newSelectedPassengersIds = state.selectedPassengersIds.filter((passengerId) => {
        return passengerId !== id
      })
      return {...state, selectedPassengersIds: newSelectedPassengersIds}
    }
    case REMOVE_ALL_SELECTED_PASSENGERS: {
      return {...state, selectedPassengersIds: []}
    }
    case SET_PASSENGER_LIST: {
      const { list } = action
      const shownPassengerId = list[0].id
      return {...state, passengerList: list, shownPassengerId: shownPassengerId}
    }
    default: {
      return state
    }
  }
}
