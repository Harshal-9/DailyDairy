import React from "react";
// import { Link } from "react-router-dom";
import "../SuccessStyle.css";

function Success() {
  return (
    <div className="card SucessMain">
      <div className="Success">
        <i className="checkmark">✓</i>
      </div>
      <h1 className="SuccessH1">Success</h1>
      <p>We received your form data !</p>
      <br />
      {/* <Link to="/">
        <button
          style={{
            color: "#88b04b",
            fontFamily: "Verdana",
            font: "bold"
          }}
        >
          Submit another form
        </button>
      </Link> */}
    </div>
  );
}

export default Success;
