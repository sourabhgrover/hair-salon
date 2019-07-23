import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import Footer from "./Footer";

import ClassList from "./content/ClassList";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <SideBar />
          <Content>
            <Switch>
              <Route path="/" exact component={ClassList} />
            </Switch>
          </Content>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
