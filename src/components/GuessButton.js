import React, { PureComponent } from 'react'
import './GuessButton.css'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class GuessButton extends PureComponent {

  handleClick = (e) => {
    this.props.makeGuess(e.target.value)
  }

  renderButton = (value,key ) => {
    return (
      <button value={value} onClick={this.handleClick}>
        {value.toUpperCase()}
      </button>
    )
  }

  render() {
    return (
      this.props.possible_guesses.map(this.renderButton)
    )
  }
}

const mapStateToProps = (state, props) => {
  return state
}

export default connect(mapStateToProps, {makeGuess})(GuessButton)
