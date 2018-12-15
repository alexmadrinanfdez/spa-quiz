import React from 'react';

export default class Tips extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4>Tips</h4>
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