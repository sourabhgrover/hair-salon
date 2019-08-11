import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

import ClassList from "./content/ClassList";
import HairStylistList from "./content/HairStylistList";
import HairEducatorList from "./content/HairEducatorList";
import UserList from "./content/UserList";
import EducatorClassesList from "./content/EducatorClassesList";

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
                <Route path="/" exact component={UserList} />
                <Route path="/classlist" component={ClassList} />
                <Route path="/hairstylist" component={HairStylistList} />
                <Route path="/haireducatorlist" component={HairEducatorList} />
                <Route path="/allUserList" component={UserList} />
                <Route
                  path="/educatorclasses/:user_id/:limit/:offset"
                  component={EducatorClassesList}
                />
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
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);
