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

  export default (state = hangSteps[5], { type, payload } =  {} ) => {
    switch(type) {
      case SHOW_HANGSTEP:
      switch(payload.guessed.lenght()) {
        case 0:
          return (hangSteps[0])
          break;
        case 1:
          return (hangSteps[1])
          break;
        case 2:
          return (hangSteps[2])
          break;
        case 3:
          return (hangSteps[3])
          break;
        case 4:
          return (hangSteps[4])
          break;
        case 5:
          return (hangSteps[5])
          break;
        case 6:
          return (hangSteps[6])
          break;
        default:
          break;
        }
      default: return state
      }

  }
