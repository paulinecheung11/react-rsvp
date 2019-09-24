import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Invitation from "./containers/Invitation/Invitation";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" component={Invitation} />
      </Layout>
    );
  }
}

export default App;
