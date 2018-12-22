import React from 'react';

import './Timer.css';

let timer = [3, 0];
export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            min: timer[0],
            sec: timer[1],
            millis: 0
        };
        // Timer.tick = Timer.tick.bind(this);
    }
    componentDidMount() {
        // El tiempo es en milisegundos
        this.timeout = setTimeout(
            this.props.tooLong,
            (timer[0] * 60 + timer[1]) * 1000
        );
        this.interval = setInterval(
            () => { this.tick() },
            100
        );
    }
    componentWillUnmount(){
        clearTimeout(this.timeout);
        clearInterval(this.interval);
    }
    tick() {
        let min = this.state.min;
        let sec = this.state.sec;
        let millis = this.state.millis;

        if (millis > 0) {
            millis -= 1;
        } else {
            millis = 9;
            if (sec > 0) {
                sec -= 1;
            } else {
                sec = 59;
                min -= 1;
            }
        }

        this.setState({
            min: min,
            sec: sec,
            millis: millis
        });
    }
    static zeroPad(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }
    render() {
        return (
            <p id="timer">
                <span>{ Timer.zeroPad(this.state.min) }</span>:
                <span>{ Timer.zeroPad(this.state.sec) }</span>:
                <span id="millis">{ this.state.millis }</span>
            </p>
        )
    }
}