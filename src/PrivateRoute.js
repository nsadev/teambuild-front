import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./utils/Auth";

export const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        );
      }
    }}
  />
);
