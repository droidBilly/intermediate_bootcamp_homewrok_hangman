import { MAKE_GUESS } from '../actions/types'

const hangSteps = [
  `






  `,
  `






  _______`,
  `
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |
     |
     |
     |
     |
  ___|___`,
  `   ____________
     |/      |
     |      (_)
     |      \\|/
     |       |
     |      / \\
     |
  ___|___`
  ]

  export default (state = 7, { type, payload } =  {} ) => {
    switch(type) {
      case MAKE_GUESS:
        if (payload.word.indexOf(payload.word) > -1) {state--
        switch(state) {
          case 6:
            return hangSteps[0]
          case 5:
            return (hangSteps[1])
          case 4:
            return (hangSteps[2])
          case 3:
            return (hangSteps[3])
          case 2:
            return (hangSteps[4])
          case 1:
            return (hangSteps[5])
          case 0:
            return (hangSteps[6])
          default:
            return state
          }
        }
      default:
        return state
    }
  }
