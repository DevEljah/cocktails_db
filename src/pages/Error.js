import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-cotainer">
        <h1>Oops! looks like the page isn't available </h1>
        <Link to="/" className="btn btn-primary">
          back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
