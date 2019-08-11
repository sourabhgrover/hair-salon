import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { getAllUserClasses } from "../../actions/classesAction";
class HairEducatorList extends React.Component {
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
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      }
    ];

    const columns = [
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: props => <span className="number">{props.value}</span> // Custom cell components!
      },
      {
        id: "friendName", // Required because our accessor is not a string
        Header: "Friend Name",
        accessor: d => d.friend.name // Custom value accessors!
      },
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: "friend.age"
      }
    ];

    return (
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Class Listing</h3>
              </div>

              <div className="box-body table-responsive no-padding">
                <ReactTable data={data} columns={columns} />
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
)(HairEducatorList);
