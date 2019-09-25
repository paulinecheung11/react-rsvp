import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import RSVP from "./RSVP/RSVP";
import Auth from "../Auth/Auth";

class Invitation extends Component {
  render() {
    console.log("token", this.props.token);

    return (
      <div>
        <h1>Home Page</h1>
        {this.props.isauthenticated ? (
          <Route path={this.props.match.url} component={RSVP} />
        ) : (
          <Route path={this.props.match.url} component={Auth} />
        )}
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    email: state.auth.email,
    isauthenticated: state.auth.token !== null
  };
};

// export default Invitation;

export default connect(mapStateToProps)(Invitation);
