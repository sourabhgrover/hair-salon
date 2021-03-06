// SideBar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel"></div>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="treeview">
              <Link to="/allUserList">
                <i className="fa fa-pie-chart" />
                <span>User Managment</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </Link>
              <ul className="treeview-menu">
                <li>
                  <Link to="/allUserList">
                    <i className="fa fa-circle-o" /> User Listing
                  </Link>
                </li>
                <li>
                  <Link to="/createUser">
                    <i className="fa fa-circle-o" />
                    Create User
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}
