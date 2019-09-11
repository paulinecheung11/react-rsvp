import React, { Component } from "react";
import Fragment from "../Fragment/Fragment";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
