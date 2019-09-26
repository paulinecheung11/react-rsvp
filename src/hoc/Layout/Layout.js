import React, { Component } from "react";
import Fragment from "../Fragment/Fragment";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
