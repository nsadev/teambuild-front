import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import "./App.css";
import Motivations from './Motivations';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Motivations />
        <PreFooter />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
