import React from "react";

class ClassList extends React.Component {
  render() {
    return (
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
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClassList;
