import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './NewGameButton.css'
import { newGame } from '../actions/game'

class NewGameButton extends PureComponent {

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button className="newGame" onClick={this.handleClick}>
        New Game
      </button>
    )
  }
}

export default connect(null, {newGame})(NewGameButton)
