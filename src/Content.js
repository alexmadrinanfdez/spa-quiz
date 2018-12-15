import React from 'react';

import Question from './Question';
import Answer from './Answer';

export default class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Question question={ this.props.question }
                          index={ this.props.index }/>
                <img src={ this.props.question.attachment.url }
                     height="500px"
                     width="500px"
                     alt="imagen del quiz"/>
                <div>
                    <Answer answer={ this.props.question.userAnswer }
                            onAnswer={ this.props.onAnswer }/>
                </div>
            </React.Fragment>
        );
    }
}