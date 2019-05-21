import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ onRouteChange }) => (
  <div className="container">
    <div className="rectangle-1" />
    <div className="rectangle-2" />
    <div className="rectangle-3" />
    <div className="rectangle-4" />
    <div className="jumbotron">
      <h1 className=" jumbo-header">Build Something Awesome </h1>
      <p className="p-text">
        Are you ready to start open sourcing but lack participation? Are you
        looking for a team for a pet project? Do you want to gain experience
        working with teams from all over?
      </p>
      <button onClick={onRouteChange}>Get Started</button>
    </div>
  </div>
);

export default Jumbotron;
