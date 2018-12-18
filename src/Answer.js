import React from 'react'
import './Answer.css'

export default class Answer extends React.Component {
    render() {
        return (
            <input type="text" placeholder="Escribe tu respuesta aquí" value={ this.props.answer || '' }
                   onChange={(event) => {
                       this.props.onAnswer(event.target.value);
                   }}/>
        );
    }
}