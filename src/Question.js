import React from 'react';

import Tips from './Tips'

export default class Question extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Question { this.props.index + 1 }</h2>
                <p>¿{ this.props.question.question }?</p>
                <Tips tips={ this.props.question.tips }/>
            </React.Fragment>
        );
    }
}