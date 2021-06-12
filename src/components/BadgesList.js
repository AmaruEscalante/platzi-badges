import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import './styles/BadgesList.css'

import twitterLogo from '../images/twitter.svg';

class BadgesListElement extends Component {
    render(){
        return (
            <div className="Badges__element">
                <Gravatar className="Badges_list-avatar" email={this.props.badge.email} />
                <div className="Badges_list-content">
                    <span className="fw-bold">{this.props.badge.firstName} {this.props.badge.lastName}</span> <br/>
                    <span style={{color: "#03A9F4"}}><img height="20px" src={twitterLogo} alt=""/> @{this.props.badge.twitter}</span> <br/>
                    <span>{this.props.badge.jobTitle}</span>
                </div>
            </div>
        )
    }
}

class BadgesList extends Component {
    render() {
        
        const badgeList = this.props.badges.slice(0).reverse()

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
                {badgeList.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <BadgesListElement badge={badge}/>
                            </Link>
                        </li>
                    )
                })} 
            </ul>
            </Fragment>
        );
    };
};

export default BadgesList;