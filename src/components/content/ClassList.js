import React from "react";
import { connect } from "react-redux";
import { getAllUserClasses } from "../../actions/classesAction";

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getAllUserClasses();
  }

  renderTable() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Start Date/Time</th>
            <th>End Date/Time</th>
            <th>Description</th>
            <th>Venue Details</th>
          </tr>
          {this.props.classList.map(singleClass => {
            return (
              <tr key={singleClass._id}>
                <td>{singleClass.title}</td>
                <td>{`${singleClass.startDate} ${singleClass.startTime}`}</td>
                <td>{`${singleClass.endDate} ${singleClass.endTime}`}</td>
                <td>{singleClass.description}</td>
                <td>{singleClass.venue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  render() {
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
  return { classList: Object.values(state.classes) };
};
export default connect(
  mapStateToProps,
  { getAllUserClasses }
)(ClassList);
