import { MAKE_GUESS, CREATE_GAME } from './types'

export const makeGuess = (value, word) => ({
      type: MAKE_GUESS,
      payload: {
        value: value,
        word: word}
    })

export const newGame =({
  type: CREATE_GAME
})
