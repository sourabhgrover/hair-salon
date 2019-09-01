// Header.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../actions/authAction";

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Link to="/" className="logo">
          <span className="logo-mini">
            <b>A</b>LT
          </span>
          <span className="logo-lg">
            <b>Admin</b>LTE
          </span>
        </Link>
        <nav className="navbar navbar-static-top">
          <Link
            to="/"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </Link>
          <div className="navbar-custom-menu">
            <Link
              to="/logout"
              onClick={e => {
                e.preventDefault();
                this.props.logout();
              }}
              className="btn btn-default btn-flat"
            >
              Sign out
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  { logout }
)(Header);
