import React, {useState} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from './Pages/Profile/Profile';

import TemplatePage from './Pages/TemplatePage/TemplatePage';
import Register from './Pages/Register/Register'

const App = () => {

    const [userid, setUserid] = useState(null)
    const [email, setEmail] = useState(null)
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    console.log('App', userid, email, firstname, lastname)

    const PrivateRoute = ({render: Component, ...rest}) => (
        <Route {...rest} render={(props) => (
            loggedIn === true ? <Component {...props}/> : <Redirect to={{
                pathname: '/signin',
                state: {from: props.location}
            }} />
        )} />
    )

    //Function passed to Sign In form where receives the user object and updating the state

    const getUser = (u) => {
        setUserid(u['user']['user_id'])
        setEmail(u['user']['email'])
        setFirstname(u['user']['first_name'])
        setLastname(u['user']['last_name'])
        setLoggedIn(true)

    }


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/profile" render={() => <Profile
                    firstName={firstname}/> }
                />
                <Route path="/apply" exact component={TemplatePage} />    {/*Change for the Apply page*/}
                <Route exact path="/signin" render={() => <SignIn getUser={getUser} /> } />
                <Route path="/register" exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
