import { MAKE_GUESS } from './types'

export const makeGuess = (value) => ({
  type: MAKE_GUESS,
  payload: {
    value,
  }
})
