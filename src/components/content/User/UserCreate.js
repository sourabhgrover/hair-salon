import React from "react";
import { connect } from "react-redux";

import UserForm from "./UserForm";
import { createUser } from "../../../actions/userAction";

class UserCreate extends React.Component {
  onSubmitForm = formValues => {
    this.props.createUser(formValues);
  };

  render() {
    const submitButtonText = "Create";
    const headerText = "Create User";
    const isEdit = false;
    return (
      <UserForm
        onSubmit={this.onSubmitForm}
        submitButtonText={submitButtonText}
        headerText={headerText}
        isEdit={isEdit}
      ></UserForm>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  { createUser }
)(UserCreate);
