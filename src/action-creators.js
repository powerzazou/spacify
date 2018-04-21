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
