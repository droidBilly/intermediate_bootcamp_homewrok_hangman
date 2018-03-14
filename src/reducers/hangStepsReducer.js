import { MAKE_GUESS } from '../actions/types'

  const gameState = { lives: 7, hangpic: 0 }

  export default (state = gameState, { type, payload } =  {} ) => {
    switch(type) {
      case MAKE_GUESS:
        if (payload.word.indexOf(payload.word) > -1) {
        state.lives--
        state.hangpic++
        switch(state.lives) {
          case 6:
            return state
          case 5:
            return state
          case 4:
            return state
          case 3:
            return state
          case 2:
            return state
          case 1:
            return state
          case 0:
            return state
          default:
            return state
          }
        }
        else state.lives++
      default:
        return state
    }
  }
