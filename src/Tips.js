import React from 'react';
import './Tips.css';

export default class Tips extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4>Pistas</h4>
                {
                    this.props.tips.length <= 0 ? <p>Sin pistas</p> :
                        <ul>
                            {
                                this.props.tips.map(tip => {
                                    return <li><small>{ tip }</small></li>
                                })
                            }
                        </ul>
                }
            </React.Fragment>
        );
    }
};