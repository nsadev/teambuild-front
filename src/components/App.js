import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import Apply from "../components/Pages/Apply/Apply";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from './Pages/Profile/Profile';

import TemplatePage from './Pages/TemplatePage/TemplatePage';

const App = () => {

  return (
      <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/apply" exact component={Apply} />    {/*Change for the Apply page*/}
          <Route path="/profile" exact component={Profile} />
          <Route path="/apply" exact component={TemplatePage} />    {/*Change for the Apply page*/}
          <Route path="/signin" exact component={SignIn} />
      </BrowserRouter>
  );
};

export default App;
