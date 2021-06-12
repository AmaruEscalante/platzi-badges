// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
// Components
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

// Assets
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge {...badge} />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.openModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal deleteBadge={props.deleteBadge} isOpen={props.isOpen} onClose={props.onClose}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                </DeleteBadgeModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
