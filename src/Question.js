import React from 'react';
import './Question.css'

import Tips from './Tips'

export default class Question extends React.Component {
    render() {
        return (
            <>
                <h2 id="question">Pregunta { this.props.index + 1 }</h2>
                <p id="text">¿{ this.props.question.question }?</p>
                <Tips tips={ this.props.question.tips }/>
            </>
        );
    }
}