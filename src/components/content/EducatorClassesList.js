import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getEducatorClassesById } from "../../actions/classesAction";

class EducatorClassesList extends React.Component {
  componentDidMount() {
    const params = this.props.match.params;
    const data = {
      user_id: params.user_id,
      limit: params.limit,
      offset: params.offset
    };
    this.props.getEducatorClassesById(data);
  }
  renderRowList = () => {
    return this.props.educatorClassesList.map(singleClass => {
      return (
        <tr key={singleClass._id}>
          <td>{singleClass.title}</td>
          <td>{singleClass.description}</td>
          <td>{singleClass.availableSeats}</td>
          <td>
            {singleClass.date} {singleClass.time}
          </td>
          <td>{singleClass.venue}</td>
        </tr>
      );
    });
  };
  renderTable() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Available Seats</th>
            <th>Date/Time</th>
            <th>Venue Details</th>
          </tr>
          {_.isEmpty(this.props.educatorClassesList) ? (
            <tr>
              <td>No Result Found</td>
            </tr>
          ) : (
            this.renderRowList()
          )}
        </tbody>
      </table>
    );
  }
  render() {
    if (this.props.educatorClassesList === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Class Listing</h3>
              </div>

              <div className="box-body table-responsive no-padding">
                {this.renderTable()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    educatorClassesList: state.classes.educatorClassesList
  };
};
export default connect(
  mapStateToProps,
  { getEducatorClassesById }
)(EducatorClassesList);
