import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import { either, isEmpty, isNil } from "ramda";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

const App = () => {
  const auth = localStorage.getItem("managerId");
  const isLoggedIn = !either(isNil, isEmpty)(auth) && auth !== "null";
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          component={Dashboard}
          condition={isLoggedIn}
          path="/dashboard"
          redirectRoute="/"
        />
        <Route path="/logout" exact>
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
