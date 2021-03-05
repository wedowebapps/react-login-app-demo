import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../modules/dashboard/containers/dashboard";
import Login from "../modules/user/containers/login";

export default function index() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
}
