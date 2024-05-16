import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({user}) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-dark text-light">User Profile</div>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Phone: {user.phone}</p>
          <p className="card-text">Website: {user.website}</p>
          <p className="card-text">
            Address: {user.address.street}, {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
          <p className="card-text">Company: {user.company.name}</p>
          <p className="card-text">Catchphrase: {user.company.catchPhrase}</p>
          <Link to="/users" type="button" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
