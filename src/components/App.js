import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <PreFooter />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
