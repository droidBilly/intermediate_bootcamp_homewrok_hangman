import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GuessButton.css'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'

class GuessButton extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    makeGuess: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const { value, locked, makeGuess } = this.props
    if (locked) return
    console.log(value)
    makeGuess(this.props.possible_guesses, value)
  }

  renderButton = (value,key ) => {
    return (
      <button
      value={value}
      onClick={this.handleClick}
      >
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

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {makeGuess: makeGuess})(GuessButton)
