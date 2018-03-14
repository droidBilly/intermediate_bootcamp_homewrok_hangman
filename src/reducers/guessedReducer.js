import { MAKE_GUESS, CREATE_GAME } from '../actions/game'

const POSSIBLE_WORDS = ["amsterdam","bankok","kuala lumpur","canberra","rio de janeiro", "washington", "lisbon", "stockholm"]
const random_word = POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)]
const POSSIBLE_GUESSES = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']
const GUESSES = []

const initialState = {
  word: random_word.toUpperCase(),
  possible_guesses: POSSIBLE_GUESSES,
  guessed: GUESSES,
  showWord: showGuess(random_word, ''),
  hangpic: showHangman(0),
  isWinner: false
}

export default function (state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_GAME:
      return initialState
    case MAKE_GUESS:
      return {
        word: state.word,
        possible_guesses: state.possible_guesses.filter(item => item !== payload.value ),
        guessed: state.guessed.concat(payload.value.toUpperCase()),
        showWord: showGuess(state.word, state.guessed),
        hangpic: showHangman(wrongGuessCount(state.word, state.guessed)),
        isWinner: isWinner(state.word, state.guessed)
      }
    default:
      return state
  }
}

function wrongGuessCount(word, guesses) {
  return guesses
  .filter(geuss => word.indexOf(geuss) < 0)
  .length;
}

function showHangman(number) {
  const hangImg = [
    'http://dinder.de/images/hangman/1.png',
    'http://dinder.de/images/hangman/2.png',
    'http://dinder.de/images/hangman/3.png',
    'http://dinder.de/images/hangman/4.png',
    'http://dinder.de/images/hangman/5.png',
    'http://dinder.de/images/hangman/6.png',
    'http://dinder.de/images/hangman/7.png',
  ]
  return hangImg[number]
}

function showGuess(word, guesses) {
  return word.split('').map(letter => {
    if(guesses.indexOf(letter) === -1) {
      return "_"
    }
      return letter
  }).join(" ")
}

function isWinner(word, guesses) {
  if(wrongGuessCount(word, guesses) >5) return 'loser'
  else if (wrongGuessCount(word, guesses)<5 && showGuess(word, guesses).indexOf("_") === -1) return 'winner'
  else return 'playing'
}
