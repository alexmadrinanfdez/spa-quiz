import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { questionAnswer, changeQuestion, submit, initQuestions } from "./redux/actions";

import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.onAnswer = this.onAnswer.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onAfter = this.onAfter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onAnswer(answer) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
  }
  onNext() {
    this.props.dispatch(changeQuestion(this.props.currentQuestion + 1));
  }
  onAfter() {
    this.props.dispatch(changeQuestion(this.props.currentQuestion - 1));
  }
  onSubmit() {
      this.props.dispatch(submit(this.props.questions));
  }
  render() {
    return (
      <div className="App">
        <nav className="App-header"><b>Quiz</b></nav>
        <Game question={ this.props.questions[this.props.currentQuestion]}
              index={ this.props.currentQuestion }
              length={ this.props.questions.length }
              finished={ this.props.finished }
              score={ this.props.score }
              onAnswer={ this.onAnswer }
              onNext={ this.onNext }
              onAfter={ this.onAfter }
              onSubmit={ this.onSubmit }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(App);
