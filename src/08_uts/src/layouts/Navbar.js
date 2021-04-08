import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <i className="fa fa-line-chart"> </i>
          Digital Trend
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#project" className="nav-link">
                Our Work
              </a>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
