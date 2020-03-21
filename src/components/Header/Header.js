import React from "react";
import "./Header.css";

const Header = props => (
  <div className="row shadow">
    <div className="col-md-12">
      <div className="row" id="header">
        <div className="col-md-8" id="title">
          <h1>Futurama Clicky Game</h1>
        </div>

        <div className="col-md-4">
          <h3>High Score: {props.highScore}</h3>
          <h3>Current Score: {props.currentScore}</h3>
        </div>
      </div>
      <div className="col-md-12" id="sub-header">
        <h5>
          Click each character only once until you have selected them all.
        </h5>
      </div>
    </div>
  </div>
);

export default Header;
