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
    this.init = this.init.bind(this);
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
  init() {
    let token = "?token=164faf060f1938806cfb"; // token de usuario
    let url = `https://quiz2019.herokuapp.com/api/quizzes/random10wa${token}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.props.dispatch(initQuestions(responseJson));
      })
      .catch((error) => {
        console.log("Error en la petición HTTP:" + error.message);
      });
  }

componentDidMount() {
    this.init();
}

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <img className="logo" src='assets/favicon.png' alt='logo'/>
          <span><b>Quiz</b></span>
          <img className="logo" src='assets/favicon.png' alt='logo'/>
        </nav>
        { this.props.questions.length > 0 ?
          <Game question={ this.props.questions[this.props.currentQuestion]}
                index={ this.props.currentQuestion }
                length={ this.props.questions.length }
                finished={ this.props.finished }
                score={ this.props.score }
                onAnswer={ this.onAnswer }
                onNext={ this.onNext }
                onAfter={ this.onAfter }
                onSubmit={ this.onSubmit }/> :
          <img className="waiting"
               src='https://image.flaticon.com/icons/svg/1288/1288278.svg'
               alt="no questions..."/>
        }
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
