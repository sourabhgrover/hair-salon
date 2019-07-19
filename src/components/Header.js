// Header.js
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o" />
                  <span className="label label-success">4</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <Link to="/">
                          <div className="pull-left">
                            <img
                              src="img/user2-160x160.jpg"
                              className="img-circle"
                              alt="User-2"
                            />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="fa fa-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
