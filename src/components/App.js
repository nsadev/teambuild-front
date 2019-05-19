import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import "./App.css";
import Motivations from './Motivations';
import Jumbotron from "./Jumbotron/Jumbotron";

const App = () => {
  const [route, setRoute] = useState('home')
  const onRouteChange = () => {
    setRoute(route === 'signIn')
  }
 
  
  
  
  return (
    <Fragment>
        <Navbar />
        <Jumbotron onRouteChange={onRouteChange}/>
        <Motivations />
        <PreFooter/>
        <Footer />
    </Fragment>
  );
}
 
export default App;
