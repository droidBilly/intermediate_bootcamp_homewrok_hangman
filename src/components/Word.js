import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Word.css'
import { connect } from 'react-redux'

class Word extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    console.log(this.props.word)
    return (
      <div class="word">
        {this.props.word.split('').map(letter => {
          return "_ "
        }
      )}
      </div>
    )
  }
}

// return word.split('').map(letter => {
//     if(guesses.indexOf(letter) === -1) {
//       return "_"
//     }
//       return letter
//   }).join(" ")

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Word)
