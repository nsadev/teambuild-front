import React, { Fragment, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import PreFooter from "./PreFooter/PreFooter";
import "./App.css";
import Motivations from "./Motivations/Motivations";
import Jumbotron from "./Jumbotron/Jumbotron";
import UserStories from "./UserStories/UserStories";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

import SignIn from './SignIn/SignIn';

const App = () => {
  const [route, setRoute] = useState("home");
  const onRouteChange = () => {
    setRoute(route === "signIn");
  };

  return (
    <Fragment>
      {/*<Navbar />*/}
      {/*<Jumbotron onRouteChange={onRouteChange} />*/}
      {/*<Motivations />*/}
      {/*<FeaturedProjects />*/}
      {/*<UserStories />*/}
      {/*<PreFooter />*/}
      {/*<Footer />*/}

      <SignIn />

    </Fragment>
  );
};

export default App;
