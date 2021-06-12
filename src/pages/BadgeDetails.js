// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
// Components
import Badge from "../components/Badge";
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
                <button className="btn btn-danger">Delete</button>
                {ReactDOM.createPortal(<h1>No estoy aqui</h1>, document.getElementById('modal'))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
