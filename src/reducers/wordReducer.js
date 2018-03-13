import { CREATE_GAME } from '../actions/types'

const POSSIBLE_WORDS = ["amsterdam","bankok","kuala lumpur","canberra","rio de janeiro", "washington", "lisbon", "stockholm"]
const random_word = POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)]

export default (state = POSSIBLE_WORDS, { type, payload } =  {} ) => {
  switch(type) {
    case CREATE_GAME:
      return state = POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)]
    default:
      return random_word
  }
}
