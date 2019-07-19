import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div className="content-wrapper">
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
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Responsive Hover Table</h3>
                </div>

                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Reason</th>
                      </tr>
                      <tr>
                        <td>183</td>
                        <td>John Doe</td>
                        <td>11-7-2014</td>
                        <td>
                          <span className="label label-success">Approved</span>
                        </td>
                        <td>
                          Bacon ipsum dolor sit amet salami venison chicken
                          flank fatback doner.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
