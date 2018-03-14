import React, { PureComponent } from 'react'
import './HangSteps.css'
import { connect } from 'react-redux'

class HangSteps extends PureComponent {

  render() {
    return (
      <div className="hangSteps">
        <img className="hangpic" src={`${this.props.guessed.hangpic}`}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(HangSteps)
