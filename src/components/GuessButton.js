import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './GuessButton.css'
import { connect } from 'react-redux'

class GuessButton extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    locked: PropTypes.bool,
  }

  handleClick = () => {
    const { value, locked } = this.props
    if (locked) return
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

export default connect(mapStateToProps)(GuessButton)
