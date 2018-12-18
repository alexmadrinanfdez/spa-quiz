import React from 'react';
import './Actionbar.css'

import Button from "./Button";

export default class Actionbar extends React.Component {
    render() {
        if (this.props.length >= 0) {
            return (
                <div id="actionbar">
                    {
                        this.props.index > 0 ?
                            <Button name={ "Anterior" }
                                    disabled={false}
                                    onClick={ this.props.onAfter }/> :
                            <Button name={ "Anterior" }
                                    disabled={ true}/>
                    }
                    {
                        this.props.index < this.props.length - 1 ?
                            <Button name={ "Siguiente" }
                                    disabled={ false }
                                    onClick={ this.props.onNext }/> :
                            <Button name={ "Siguiente" }
                                    disabled={ true }/>
                    }
                    <Button name={ "Enviar" }
                            onClick={ this.props.onSubmit }/>
                </div>
            )
        } else {
            return [
                <Button name={ "Anterior" }
                        disabled={ true }/>,
                <Button name={ "Siguiente" }
                        disabled={ true }/>,
                <Button name={ "Enviar" }
                        disabled={ true }/>
            ]
        }
    }
}