import React from 'react'
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
      if (!props.condition) {
        return <Redirect to={props.redirectRoute} />;
      }
      return <Route path={props.path} component={props.component} />;
}
