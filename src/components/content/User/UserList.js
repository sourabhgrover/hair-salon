import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { withRouter } from "react-router-dom";

import { getAllUserAvailable, deleteUser } from "../../../actions/userAction";
import { USER_LISTING_ITEM_PER_PAGE } from "../../../utils/constant";

class UserList extends React.Component {
  componentDidMount() {
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

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * USER_LISTING_ITEM_PER_PAGE);
    const postData = {
      limit: USER_LISTING_ITEM_PER_PAGE,
      offset
    };
    this.props.getAllUserAvailable(postData);
  };

  confirmationBox = (e, userName, userId) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to delete user ${userName} ?`)) {
      // this.props.history.push(`/deleteUser/${userId}`);
      this.props.deleteUser(`${userId}`, this.props.history);
    }
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
                  {Number(singleUser.profession) !== 3 ? (
                    <React.Fragment>
                      <Link to={`/editUser/${singleUser.id}`}>Edit</Link>
                      {"     "}
                      <Link
                        to={`/deleteUser/${singleUser.id}`}
                        onClick={e =>
                          this.confirmationBox(
                            e,
                            `${singleUser.first_name} ${singleUser.last_name}`,
                            `${singleUser.id}`
                          )
                        }
                      >
                        Delete
                      </Link>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>{"  "}</React.Fragment>
                  )}
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

            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              // pageCount={this.state.pageCount}
              pageCount={this.props.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.user.userList,
    totalCount: state.user.totalCount,
    pageCount: state.user.pageCount
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getAllUserAvailable, deleteUser }
  )(UserList)
);
