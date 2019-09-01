import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Pagination from "react-js-pagination";

import { getAllUserAvailable } from "../../../actions/userAction";
import { USER_LISTING_ITEM_PER_PAGE } from "../../../utils/constant";
class UserList extends React.Component {
  componentDidMount() {
    // const params = this.props.match.params;
    const data = {
      limit: USER_LISTING_ITEM_PER_PAGE,
      offset: 0
    };
    this.props.getAllUserAvailable(data);
  }

  renderSwitch(param) {
    switch (param) {
      case "1":
        return "Hair Stylist";
      case "2":
        return "Hair Educator";
      default:
        return "N/A";
    }
  }

  handlePageChange = pageNumber => {
    var offset =
      pageNumber * USER_LISTING_ITEM_PER_PAGE - USER_LISTING_ITEM_PER_PAGE;
    const data = {
      limit: USER_LISTING_ITEM_PER_PAGE,
      offset
    };
    this.props.getAllUserAvailable(data);
  };

  renderTable() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Profession</th>
            <th>Actions</th>
          </tr>
          {this.props.userList.map(singleUser => {
            return (
              <tr key={singleUser.id}>
                <td>
                  {Number(singleUser.profession) === 2 ? (
                    <Link to={`/educatorclasses/${singleUser.id}/20/0`}>
                      {singleUser.first_name} {singleUser.last_name}
                    </Link>
                  ) : (
                    `${singleUser.first_name} ${singleUser.last_name}`
                  )}
                </td>
                <td>{this.renderSwitch(singleUser.profession)}</td>
                <td>
                  <Link to={`/editUser/${singleUser.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  render() {
    if (this.props.userList === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">User Listing</h3>
              </div>

              <div className="box-body table-responsive no-padding">
                {this.renderTable()}
              </div>
            </div>
            {/* <Pagination
              itemsCountPerPage={USER_LISTING_ITEM_PER_PAGE}
              totalItemsCount={this.props.totalCount}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            /> */}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.user.userList,
    totalCount: state.user.totalCount
  };
};
export default connect(
  mapStateToProps,
  { getAllUserAvailable }
)(UserList);
