import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Word.css'
import { connect } from 'react-redux'

class Word extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    console.log(this.props.guessed)
    return (
      <div class="word">
        {this.props.word.split('').map(letter => {
          if(this.props.guessed.indexOf(letter) === -1) {
            return "_"
          }
            return letter
        }).join(" ")}
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

const mapStateToProps = word => {
  return word;
}

export default connect(mapStateToProps)(Word)
