import { MAKE_GUESS } from './types'

export const makeGuess = (value) => {
  const guess = value;
  return dispatch => {
    dispatch({
      type: MAKE_GUESS,
      payload: guess
    })
  }
}
