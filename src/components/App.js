import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn/SignIn"
import Profile from "./Pages/Profile/Profile"
import Register from "./Pages/Register/Register"
import Apply from "./Pages/Apply/Apply"
import auth from "../utils/Auth"
import { PrivateRoute } from "../PrivateRoute"
import "./App.css"

const App = ({ hideLoader }) => {
    useEffect(() => hideLoader(), [])

    if (auth.isAuthenticated()) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <PrivateRoute path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/apply" exact component={Apply} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
