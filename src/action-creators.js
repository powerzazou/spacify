// Spaceship management
export const CHANGE_SHOWN_SPACESHIP = '@@SPACIFY/CHANGE_SHOWN_SPACESHIP'
export const CHANGE_SELECTED_SPACESHIP = '@@SPACIFY/CHANGE_SELECTED_SPACESHIP'

export function changeShownSpaceship (id) {
  return {type: CHANGE_SHOWN_SPACESHIP, id}
}

export function changeSelectedSpaceship (id) {
  return {type: CHANGE_SELECTED_SPACESHIP, id}
}
