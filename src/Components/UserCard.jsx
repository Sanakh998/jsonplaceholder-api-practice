import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ users }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card">
              <img src="user.png" alt="user" />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <div className="d-flex">
                  <Link to={"/users/" + user.id} className="btn btn-primary">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
