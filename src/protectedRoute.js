const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
