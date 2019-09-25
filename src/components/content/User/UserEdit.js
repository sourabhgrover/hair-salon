import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { getUserById, updateUserById } from "../../../actions/userAction";
import UserForm from "./UserForm";
import { withRouter } from "react-router-dom";

class UserEdit extends React.Component {
  componentDidMount() {
    this.props.getUserById(this.props.match.params.userId);
  }

  onSubmitForm = formValues => {
    this.props.updateUserById(
      this.props.match.params.userId,
      formValues,
      this.props.history
    );
  };
  render() {
    const submitButtonText = "Update";
    const headerText = "Update User";
    const isEdit = true;
    if (this.props.currentUser === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <UserForm
        initialValues={_.pick(
          this.props.currentUser,
          "email",
          "first_name",
          "last_name",
          "profession",
          "is_profile_created",
          "is_geekout_filled",
          "is_subscription_purchased"
        )}
        onSubmit={this.onSubmitForm}
        submitButtonText={submitButtonText}
        headerText={headerText}
        isEdit={isEdit}
      ></UserForm>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { currentUser: state.user.currentUser };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserById, updateUserById }
  )(UserEdit)
);
