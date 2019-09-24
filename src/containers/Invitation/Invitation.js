import React, { Component } from "react";
import { Route } from "react-router-dom";
import RSVP from "./RSVP/RSVP";
import Auth from "../Auth/Auth";

class Invitation extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Route path={this.props.match.url} component={Auth} />
        <Route path={this.props.match.url} component={RSVP} />
      </div>
    );
  }
}

export default Invitation;
