import { ADD_WORD } from '../actions/types'

const POSSIBLE_WORDS = ["amsterdam","bankok","kuala lumpur","sydney","rio de janeiro"]

export default (state = POSSIBLE_WORDS, { type, payload } =  {} ) => {
  switch(type) {
    case ADD_WORD:
    default:
      return state = POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)]
  }
}
