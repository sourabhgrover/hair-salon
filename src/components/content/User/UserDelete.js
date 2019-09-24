import React from "react";
import { connect } from "react-redux";

import { getUserById } from "../../../actions/userAction";
// import { withRouter } from "react-router-dom";
import history from "../../../history";

import Modal from "../../Modal";
import { Link } from "react-router-dom";

class UserDelete extends React.Component {
  componentDidMount() {
    console.log("come");
    this.props.getUserById(this.props.match.params.userId);
  }
  dismissAction = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui primary button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui primary button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        action={this.dismissAction()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

// export default UserDelete;
export default connect(
  mapStateToProps,
  { getUserById }
)(UserDelete);
