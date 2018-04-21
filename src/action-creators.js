// Spaceship management
export const CHANGE_SHOWN_SPACESHIP = '@@SPACIFY/CHANGE_SHOWN_SPACESHIP'
export const CHANGE_SELECTED_SPACESHIP = '@@SPACIFY/CHANGE_SELECTED_SPACESHIP'

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

export function changeShownPassenger (id) {
  return {type: CHANGE_SHOWN_PASSENGER, id}
}

export function addSelectedPassenger (id) {
  return {type: ADD_SELECTED_PASSENGER, id}
}

export function removeSelectedPassenger (id) {
  return {type: REMOVE_SELECTED_PASSENGER, id}
}
