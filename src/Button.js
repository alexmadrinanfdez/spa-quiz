import React from 'react';
import './Button.css'

export default class Button extends React.Component {
    render() {
        return (
            this.props.hidden ?
                null :
                <button disabled={ this.props.disabled }
                        onClick={ this.props.onClick }>
                    { this.props.name }
                </button>
        )
    }
}