import React from 'react';
import './Game.css';

import Content from './Content';
import Actionbar from './Actionbar';
import Timer from './Timer'

export default class Game extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.finished ?
                        <h2 id="final">Has acertado <em>{ this.props.score }</em> !</h2> :
                        <div id="game">
                            <Timer tooLong={ this.props.onSubmit }/>
                            <Content question={ this.props.question }
                                     index={ this.props.index }
                                     onAnswer={ this.props.onAnswer }/>
                        </div>
                }
                <Actionbar length={ this.props.length }
                           index={ this.props.index }
                           finished={ this.props.finished }
                           onNext={ this.props.onNext }
                           onAfter={ this.props.onAfter }
                           onSubmit={ this.props.onSubmit }
                           onReset={ this.props.onReset }/>
            </>
        )
    }
}