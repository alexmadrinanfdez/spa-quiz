import React from 'react';
import './Actionbar.css'

import Button from "./Button";

export default class Actionbar extends React.Component {
    render() {
        if (this.props.length >= 0 && !this.props.finished) {
            return (
                <div className="actionbar">
                    <Button name={ "Otra vez" }
                            onClick={ this.props.onReset }/>
                    {
                        this.props.index > 0 ?
                            <Button name={ "Anterior" }
                                    disabled={false}
                                    onClick={ this.props.onAfter }/> :
                            <Button name={ "Anterior" }
                                    disabled/>
                    }
                    {
                        this.props.index < this.props.length - 1 ?
                            <Button name={ "Siguiente" }
                                    disabled={ false }
                                    onClick={ this.props.onNext }/> :
                            <Button name={ "Siguiente" }
                                    disabled/>
                    }
                    <Button name={ "Enviar" }
                            onClick={ this.props.onSubmit }/>
                </div>
            )
        } else {
            return (
                <div className="actionbar">
                    <Button name={ "Otra vez" }
                            disabled={ false }
                            onClick={ this.props.onReset }/>
                    <Button name={ "Anterior" }
                            disabled
                            hidden/>
                    <Button name={ "Siguiente" }
                            disabled
                            hidden/>
                    <Button name={ "Enviar" }
                            disabled
                            hidden/>
                </div>
            )
        }
    }
}