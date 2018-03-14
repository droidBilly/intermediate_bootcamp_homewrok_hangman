import React, { PureComponent } from 'react'
import './GuessButton.css'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class GuessButton extends PureComponent {

  handleClick = (e) => {
    this.props.makeGuess(e.target.value, this.props.word)
  }

  renderButton = (value,key ) => {
    {if (value === " ") {
      return (
        <button key={value} value={value} onClick={this.handleClick}>
          Space
        </button>
      )
    }
    else {
      return (
        <button key={value} value={value} onClick={this.handleClick}>
          {value.toUpperCase()}
        </button>
      )
    }
  }}

  render() {
    return (
      this.props.guessed.possible_guesses.map(this.renderButton)
    )
  }
}

const mapStateToProps = (state, props) => {
  return state
}

export default connect(mapStateToProps, {makeGuess})(GuessButton)
