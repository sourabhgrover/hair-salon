import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <SideBar />
          <Content />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
