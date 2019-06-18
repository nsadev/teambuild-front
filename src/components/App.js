import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn/SignIn"
import Profile from "./Pages/Profile/Profile"
import Register from "./Pages/Register/Register"
import Apply from "./Pages/Apply/Apply"
import auth from "../utils/Auth"
import "./App.css"

const App = () => {
    if (auth.isAuthenticated()) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/register" exact component={Register} />
                </Switch>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/register" exact component={Register} />
                    <Route path='/apply' exact component={Apply} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
