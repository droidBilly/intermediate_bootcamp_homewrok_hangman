import React, { PureComponent } from 'react'
import './Word.css'
import { connect } from 'react-redux'

class Word extends PureComponent {

  render() {
    return (
      <div className="word">
      {this.props.guessed.showWord}
      </div>
    )
  }
}

const mapStateToProps = word => {
  return word;
}

export default connect(mapStateToProps)(Word)
