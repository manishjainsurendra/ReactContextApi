import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0 ">
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "#61dafb" }}>
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "#61dafb" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact/add"
                  className="nav-link"
                  style={{ color: "#61dafb" }}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  style={{ color: "#61dafb" }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
