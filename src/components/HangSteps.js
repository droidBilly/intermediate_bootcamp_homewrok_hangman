import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './HangSteps.css'
import { connect } from 'react-redux'

class HangSteps extends PureComponent {
  static propTypes = {
    hangSteps: PropTypes.string.isRequired,
  }


  render() {
    const hangImg = [
      'http://dinder.de/images/hangman/1.png',
      'http://dinder.de/images/hangman/2.png',
      'http://dinder.de/images/hangman/3.png',
      'http://dinder.de/images/hangman/4.png',
      'http://dinder.de/images/hangman/5.png',
      'http://dinder.de/images/hangman/6.png',
      'http://dinder.de/images/hangman/7.png',
    ]

    return (
      <div className="hangSteps">
        <img className="hangpic" src={`${hangImg[this.props.hangSteps.hangpic]}`}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(HangSteps)
