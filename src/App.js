import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Invitation from "./containers/Invitation/Invitation";

//import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/home" component={Invitation} />
            <Redirect from="/" to="/auth" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
