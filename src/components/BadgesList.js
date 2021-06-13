import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import twitterLogo from "../images/twitter.svg";

class BadgesListElement extends React.Component {
  render() {
    return (
      <div className="Badges__element">
        <Gravatar
          className="Badges_list-avatar"
          email={this.props.badge.email}
        />
        <div className="Badges_list-content">
          <span className="fw-bold">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </span>{" "}
          <br />
          <span style={{ color: "#03A9F4" }}>
            <img height="20px" src={twitterLogo} alt="" /> @
            {this.props.badge.twitter}
          </span>{" "}
          <br />
          <span>{this.props.badge.jobTitle}</span>
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="form-group mb-4">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListElement badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default BadgesList;