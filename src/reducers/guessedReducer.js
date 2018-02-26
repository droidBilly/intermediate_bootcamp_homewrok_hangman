import { GUESS_MADE } from '../actions/types'

export default (state = [], { type, payload } =  {} ) => {
  switch(type) {
    case GUESS_MADE:
      return [].concat(payload.value)
    default:
      return state
  }
}
