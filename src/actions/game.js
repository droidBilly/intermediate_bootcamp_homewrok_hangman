export const CREATE_GAME = "CREATE_GAME"
export const MAKE_GUESS = "MAKE_GUESS"

export const makeGuess = (value, word) => ({
      type: MAKE_GUESS,
      payload: {
        value: value,
        word: word}
    })

export const newGame = () => ({
  type: CREATE_GAME
})
