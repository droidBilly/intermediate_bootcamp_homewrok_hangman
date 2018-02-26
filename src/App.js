import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import GuessButton from "./components/GuessButton";

class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.possible_guesses);
    return (
      <div className="App">
        <h1 className="App-title">Hangman</h1>
        {/* <embed src="../bg_music.mp3" width="0" height="0" loop="false" autostart="false" hidden="true" />
*/}
        <GuessButton />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps) (App);
