import { CREATE_GAME, MAKE_GUESS } from '../actions/types'

const POSSIBLE_GUESSES = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '
]

export default (state = POSSIBLE_GUESSES, { type, payload } =  {} ) => {
  switch(type) {
    case CREATE_GAME:
      return state
    case MAKE_GUESS:
      console.log(payload.value)
      return this.guessed.concat(payload.value)
    default:
      return state
  }
}
