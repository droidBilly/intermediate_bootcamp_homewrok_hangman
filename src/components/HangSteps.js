import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './HangSteps.css'
import { connect } from 'react-redux'

class HangSteps extends PureComponent {
  static propTypes = {
    hangSteps: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="hangSteps">
        {this.props.hangSteps}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(HangSteps)
