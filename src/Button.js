import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button disabled={ this.props.disabled }
                    onClick={ this.props.onClick }>
                { this.props.name }
            </button>
        )
    }
}