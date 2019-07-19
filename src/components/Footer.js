import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>
          Copyright © 2014-2016{" "}
          <Link to="https://adminlte.io">Almsaeed Studio</Link>.
        </strong>
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
