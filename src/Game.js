import React from 'react';

import Content from './Content';
import Actionbar from "./Actionbar";

export default class Game extends React.Component {
    render() {
        return (
            this.props.finished ?
                <h2>Has acertado <em>{ this.props.score }</em> !</h2> :
                <>
                    <Content question={ this.props.question }
                             index={ this.props.index }
                             onAnswer={ this.props.onAnswer }/>
                    <Actionbar length={ this.props.length }
                               index={ this.props.index }
                               onNext={ this.props.onNext }
                               onAfter={ this.props.onAfter }
                               onSubmit={ this.props.onSubmit }/>
                </>
        )
    }
}

