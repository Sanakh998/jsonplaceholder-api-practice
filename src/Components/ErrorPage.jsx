import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({error}) => {
  return (
    <div className="container text-center bg-dark-subtle p-4 rounded-3 mt-4">
      <h5 className="text-danger mb-3">{error}</h5>
      <Link to="/" className="btn btn-sm btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
