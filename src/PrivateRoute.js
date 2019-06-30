import React from "react"
import { Route, Redirect } from "react-router-dom"
import auth from "./utils/Auth"

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auth.admin) {
                return <Component {...props} />
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        }}
    />
)
