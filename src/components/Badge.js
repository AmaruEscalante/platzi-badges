import React, { Component } from 'react';

import Gravatar from './Gravatar';
import './styles/badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Platzi Badge"/>
            </div>

            <div className="Badge__section-name">
                <Gravatar
                    className="Badge__avatar"
                    email={this.props.email}
                    alt="Avatar"
                />
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <p>{this.props.jobTitle}</p>
                <p>@{this.props.twitter}</p>
            </div>
            <div className="Badge__footer">#platziconf</div>
        </div>
    }
}

export default Badge;