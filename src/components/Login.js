import React from "react";

import LoginForm from "./LoginForm";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default connect(null)(Login);
