import { SHOW_HANGSTEP } from '../actions/types'

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

  export default (state = hangSteps[0], { type, payload } =  {} ) => {
    switch(type) {
      case SHOW_HANGSTEP:
      switch(payload.guessed.lenght()) {
        case 0:
          return (hangSteps[0])
        case 1:
          return (hangSteps[1])
        case 2:
          return (hangSteps[2])
        case 3:
          return (hangSteps[3])
        case 4:
          return (hangSteps[4])
        case 5:
          return (hangSteps[5])
        case 6:
          return (hangSteps[6])
        default:
        }
      default: return state
      }

  }
