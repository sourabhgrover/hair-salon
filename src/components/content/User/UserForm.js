import React from "react";
import { Field, reduxForm } from "redux-form";
import DropdownList from "react-widgets/lib/DropdownList";
import SelectList from "react-widgets/lib/SelectList";
import "react-widgets/dist/css/react-widgets.css";

class UserForm extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderField = ({ input, placeholder, data, type, className, meta }) => {
    return (
      <div>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          data={data}
          className={className}
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  renderDropdownList = ({ input, data, valueField, textField }) => {
    return (
      <DropdownList
        {...input}
        data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange}
      />
    );
  };

  renderSelectList = ({ input, data, className }) => (
    <SelectList
      {...input}
      onBlur={() => input.onBlur()}
      data={data}
      className={className}
    />
  );

  render() {
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title"> {this.props.headerText}</h3>
        </div>
        {/* This will handle the global error */}
        <div className="errorContainer">
          <span className="error">{this.props.error}</span>
        </div>
        <form
          className="form-horizontal"
          method="post"
          onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        >
          <div className="box-body">
            <div className="form-group">
              <label className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <Field
                  name="email"
                  component={this.renderField}
                  type="text"
                  placeholder="Email"
                  className="form-control"
                ></Field>
              </div>
            </div>
            {!this.props.isEdit ? (
              <div className="form-group">
                <label className="col-sm-2 control-label">Password</label>

                <div className="col-sm-10">
                  <Field
                    name="password"
                    component={this.renderField}
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="form-group">
              <label className="col-sm-2 control-label">First Name</label>

              <div className="col-sm-10">
                <Field
                  name="first_name"
                  component={this.renderField}
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                ></Field>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Last Name</label>

              <div className="col-sm-10">
                <Field
                  name="last_name"
                  component={this.renderField}
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                ></Field>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Profession</label>
              <div className="col-sm-10">
                <Field
                  name="profession"
                  component="select"
                  className="form-control"
                >
                  <option></option>
                  <option value="1">Hair Stylist</option>
                  <option value="2">Hair Educator</option>
                </Field>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Profile Created</label>
              <div className="radio">
                <label>
                  <Field
                    name="is_profile_created"
                    component="input"
                    // component={this.renderField}
                    type="radio"
                    value="1"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    name="is_profile_created"
                    component="input"
                    type="radio"
                    value="2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">
                Geekout Purchased
              </label>
              <div className="radio">
                <label>
                  <Field
                    name="is_geekout_filled"
                    component="input"
                    type="radio"
                    value="1"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    name="is_geekout_filled"
                    component="input"
                    type="radio"
                    value="2"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">
                Subscription Purchased
              </label>
              <div className="radio">
                <label>
                  <Field
                    name="is_subscription_purchased"
                    component="input"
                    type="radio"
                    value="1"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    name="is_subscription_purchased"
                    component="input"
                    type="radio"
                    value="2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* <div className="form-group">
              <label className="col-sm-2 control-label">
                Subscription Purchased
              </label>
              <div className="radio">
                <label>
                  <Field
                    name="is_subscription_purchased"
                    component="input"
                    type="radio"
                    value="true"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    name="is_subscription_purchased"
                    component="input"
                    type="radio"
                    value="false"
                  />
                  No
                </label>
              </div>
            </div> */}

            <div className="row">
              <div className="col-xs-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                  disabled={this.props.pristine || this.props.submitting}
                >
                  {this.props.submitButtonText}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  // if (!formValues.email) {
  //   errors.email = "Email is required";
  // }

  // if (!formValues.email) {
  //   errors.is_profile_created = "Profile is required";
  // }

  return errors;
};

export default reduxForm({
  form: "UserForm", // a unique identifier for this form
  enableReinitialize: true, // TODO I have bind connect method first reintailize of form was not working ,explicitaly set it true
  validate // Set Validate method for client side validation
})(UserForm);
