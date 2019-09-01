import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { login } from "../actions/authAction";

class LoginForm extends React.Component {
  onSubmitForm = formValues => {
    this.props.login(formValues);
  };
  renderField = formProps => {
    return (
      <div>
        <input
          {...formProps.input}
          placeholder={formProps.placeholder}
          type={formProps.type}
          className={formProps.className}
        />
        <div>{this.renderError(formProps.meta)}</div>
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div style={{ color: "red" }}>{error}</div>;
    }
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <b>Admin Pannel</b>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>

          {/* This will handle the global error */}
          <div className="errorContainer">
            <span className="error" style={{ color: "red" }}>
              {this.props.error}
            </span>
          </div>
          <form
            method="post"
            onSubmit={this.props.handleSubmit(this.onSubmitForm)}
          >
            <div className="form-group has-feedback">
              <Field
                name="email"
                component={this.renderField}
                type="text"
                placeholder="Email"
                className="form-control"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>

            <div className="form-group has-feedback">
              <Field
                type="password"
                placeholder="Enter Password"
                component={this.renderField}
                name="password"
                className="form-control"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            <div className="row">
              <div className="col-xs-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                  disabled={this.props.submitting}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  }

  return errors;
};
const formWrapper = reduxForm({
  form: "LoginForm", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(LoginForm);

const mapStateToProps = (state, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  { login }
)(formWrapper);
