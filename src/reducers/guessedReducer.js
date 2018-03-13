import { MAKE_GUESS } from '../actions/types'

export default function (state = [], action) {
  console.log(action.type);
  switch(action.type) {
    case MAKE_GUESS:
      return state.concat(action.payload)
    default:
      return state
  }
}
