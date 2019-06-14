import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import { PrivateRoute } from "../PrivateRoute";

import TemplatePage from "./Pages/TemplatePage/TemplatePage";
import Register from "./Pages/Register/Register";

const App = () => {
  const [userid, setUserid] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  //Function passed to Sign In form where receives the user object and updating the state

  const getUser = u => {
    setUserid(u["id"]);
    setEmail(u["email"]);
    setFirstname(u["first_name"]);
    setLastname(u["last_name"]);
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute
          exact
          path="/profile"
          render={props => <Profile {...props} firstname={firstname} />}
        />
        <Route path="/apply" exact component={TemplatePage} />{" "}
        {/*Change for the Apply page*/}
        <Route
          exact
          path="/signin"
          render={() => <SignIn getUser={getUser} />}
        />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
