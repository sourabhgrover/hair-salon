import React from "react";

class BreadCrumb extends React.Component {
  render() {
    return (
      <section className="content-header">
        <h1>
          Dashboard
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <i className="fa fa-dashboard" /> Home
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>
    );
  }
}

export default BreadCrumb;
