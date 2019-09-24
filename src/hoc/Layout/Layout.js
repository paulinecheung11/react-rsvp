import React, { Component } from "react";
import Fragment from "../Fragment/Fragment";
import classes from "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
