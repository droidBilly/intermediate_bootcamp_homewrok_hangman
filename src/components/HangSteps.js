import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './HangSteps.css'
import { connect } from 'react-redux'

class HangSteps extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    console.log(this.props.hangSteps)
    return (
      <div class="hangSteps">
        {this.props.hangSteps}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(HangSteps)
