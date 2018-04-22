// Spaceship management
export const SET_SPACESHIP_LIST = '@@SPACIFY/SET_SPACESHIP_LIST'
export const CHANGE_SHOWN_SPACESHIP = '@@SPACIFY/CHANGE_SHOWN_SPACESHIP'
export const CHANGE_SELECTED_SPACESHIP = '@@SPACIFY/CHANGE_SELECTED_SPACESHIP'

export function setSpaceshipList (list) {
  return {type: SET_SPACESHIP_LIST, list}
}

export function changeShownSpaceship (id) {
  return {type: CHANGE_SHOWN_SPACESHIP, id}
}

export function changeSelectedSpaceship (id) {
  return {type: CHANGE_SELECTED_SPACESHIP, id}
}

// Side management
export const CHANGE_SHOWN_SIDE = '@@SPACIFY/CHANGE_SHOWN_SIDE'
export const CHANGE_SELECTED_SIDE = '@@SPACIFY/CHANGE_SELECTED_SIDE'

export function changeShownSide (id) {
  return {type: CHANGE_SHOWN_SIDE, id}
}

export function changeSelectedSide (id) {
  return {type: CHANGE_SELECTED_SIDE, id}
}

// Passengers management
export const CHANGE_SHOWN_PASSENGER = '@@SPACIFY/CHANGE_SHOWN_PASSENGER'
export const ADD_SELECTED_PASSENGER = '@@SPACIFY/ADD_SELECTED_PASSENGER'
export const REMOVE_SELECTED_PASSENGER = '@@SPACIFY/REMOVE_SELECTED_PASSENGER'
export const REMOVE_ALL_SELECTED_PASSENGERS = '@@SPACIFY/REMOVE_ALL_SELECTED_PASSENGERS'
export const SET_PASSENGER_LIST = '@@SPACIFY/SET_PASSENGER_LIST'

export function changeShownPassenger (id) {
  return {type: CHANGE_SHOWN_PASSENGER, id}
}

export function addSelectedPassenger (id) {
  return {type: ADD_SELECTED_PASSENGER, id}
}

export function removeSelectedPassenger (id) {
  return {type: REMOVE_SELECTED_PASSENGER, id}
}
export function removeAllSelectedPassengers () {
  return {type: REMOVE_ALL_SELECTED_PASSENGERS}
}

export function setPassengerList (list) {
  return {type: SET_PASSENGER_LIST, list}
}

// Destination management
export const CHANGE_SHOWN_DESTINATION = '@@SPACIFY/CHANGE_SHOWN_DESTINATION'
export const CHANGE_SELECTED_DESTINATION = '@@SPACIFY/CHANGE_SELECTED_DESTINATION'
export const SET_DESTINATION_LIST = '@@SPACIFY/SET_DESTINATION_LIST'

export function changeShownDestination (id) {
  return {type: CHANGE_SHOWN_DESTINATION, id}
}

export function changeSelectedDestination (id) {
  return {type: CHANGE_SELECTED_DESTINATION, id}
}

export function setDestinationList (list) {
  return {type: SET_DESTINATION_LIST, list}
}

// Quotation Management
export const SET_QUOTATION_PRICE = '@@SPACIFY/SET_QUOTATION_PRICE'

export function setQuotationPrice (quotation) {
  return {type: SET_QUOTATION_PRICE, quotation}
}

export const SET_ORDER_CONFIRMATION = '@@SPACIFY/SET_ORDER_CONFIRMATION'

export function setOrderConfirmation (order) {
  return {type: SET_ORDER_CONFIRMATION, order}
}
