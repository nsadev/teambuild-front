import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
