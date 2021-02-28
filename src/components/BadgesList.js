import { Component } from 'react';
import twitterLogo from '../images/twitter.svg';
import './styles/BadgesList.css'

class BadgesList extends Component {
    render() {
        return (
            <div>
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="Badges__element">
                            <img height="100px" className="Badges_list-avatar" src={badge.image} alt=""/>
                            <div className="Badges_list-content">
                                <span className="fw-bold">{badge.name}</span> <br/>
                                <span style={{color: "#03A9F4"}}><img height="20px" src={twitterLogo} alt=""/> @{badge.name}</span> <br/>
                                <span>{badge.location.name}</span>
                            </div>
                        </li>
                    )
                })} 
            </ul>
            </div>
        );
    };
};

export default BadgesList;