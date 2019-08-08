import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

import ClassList from "./content/ClassList";

class App extends React.Component {
  render() {
    // Conditional Render if User Is not Signed In Load Login Component else Load BootStrap Component

    return !this.props.isSignedIn ? (
      <LoginForm />
    ) : (
      <div>
        <div className="wrapper">
          <BrowserRouter>
            <Header />
            <SideBar />
            <Content>
              <Switch>
                <Route path="/" exact component={ClassList} />
                <Route path="/classlist" component={ClassList} />
              </Switch>
            </Content>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.user.isSignedIn };
};

export default connect(mapStateToProps)(App);
