import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import SignIn from "./Pages/SignIn/SignIn"

const App = () => {

  return (
      <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/apply" exact component={Apply} />
          <Route path="/signin" exact component={SignIn} />
      </BrowserRouter>
  );
};

export default App;
