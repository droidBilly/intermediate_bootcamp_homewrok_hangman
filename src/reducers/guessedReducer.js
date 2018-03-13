import { MAKE_GUESS, CREATE_GAME } from '../actions/types'

export default function (state = [], action) {
  switch(action.type) {
    case CREATE_GAME:
      return state = []
    case MAKE_GUESS:
      return state.concat(action.payload.value)
    default:
      return state
  }
}
