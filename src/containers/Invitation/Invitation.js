import React, { Component } from "react";
import { Route } from "react-router-dom";
import RSVP from "./RSVP/RSVP";

class Invitation extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1> Home Page</h1>
        <Route path={this.props.match.url} component={RSVP} />
      </div>
    );
  }
}

export default Invitation;
