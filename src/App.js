import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import GuessButton from "./components/GuessButton";
import HangSteps from "./components/HangSteps";
import Word from "./components/Word";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hangman</h1>
        {/* <embed src="../bg_music.mp3" width="0" height="0" loop="false" autostart="false" hidden="true" />
*/}
        <HangSteps />
        <Word / >
        <GuessButton />


        <br/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    possible_guesses: state,
    word: state,
    guessed: state,
    hangSteps: state,
  }
}

export default connect(mapStateToProps) (App);
