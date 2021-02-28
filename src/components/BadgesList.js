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
                        <li className="Badges__element">
                            <img className="Badges_list-avatar" src="https://www.gravatar.com/avatar/214ed15d68ace3965642162f8d2e84?d=identicon" alt=""/>
                            <div className="Badges_list-content">
                                <span className="fw-bold">{badge.firstName} {badge.lastName}</span> <br/>
                                <span style={{color: "#03A9F4"}}><img height="20px" src={twitterLogo} alt=""/> @{badge.twitter}</span> <br/>
                                <span>{badge.career}</span>
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