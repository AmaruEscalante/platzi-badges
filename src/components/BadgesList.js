import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import twitterLogo from '../images/twitter.svg';
import './styles/BadgesList.css'

class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0){
            return <Fragment>
                <h3>We didn't found any badge</h3>
                <Link to="/badges/new/" className="btn btn-primary btn-lg">
                    Create Your First Badge
                </Link>
            </Fragment>
        }

        return (
            <Fragment>
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="Badges__element">
                            <Gravatar className="Badges_list-avatar" email={badge.email} />
                            <div className="Badges_list-content">
                                <span className="fw-bold">{badge.firstName} {badge.lastName}</span> <br/>
                                <span style={{color: "#03A9F4"}}><img height="20px" src={twitterLogo} alt=""/> @{badge.twitter}</span> <br/>
                                <span>{badge.jobTitle}</span>
                            </div>
                        </li>
                    )
                })} 
            </ul>
            </Fragment>
        );
    };
};

export default BadgesList;