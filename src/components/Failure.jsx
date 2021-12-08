import React from "react";
// import { Link } from "react-router-dom";
import "../FailureStyle.css";

function Failure() {
  return (
    <div className="card FailureMain">
      <div className="Failure">
        <i className="cross">X</i>
      </div>
      <h1 className="FailureH1">Failure</h1>
      <p className="failurePara">You form data was not submitted !</p>
      <br />
    </div>
  );
}

export default Failure;
