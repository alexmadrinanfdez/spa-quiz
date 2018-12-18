import React from 'react';
import './Content.css'

import Question from './Question';
import Answer from './Answer';

export default class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <div id="der">
                    <Question question={ this.props.question }
                              index={ this.props.index }/>
                </div>
                <div id="izq">
                    <img id="imgCustom" src={ this.props.question.attachment.url }
                         alt="imagen del quiz"/>
                    <Answer answer={ this.props.question.userAnswer }
                            onAnswer={ this.props.onAnswer }/>
                </div>
            </div>
        );
    }
}