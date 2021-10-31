import React from "react";
import "../SuccessStyle.css";

function Success() {
  return (
    <div className="card SucessMain">
      <div className="Success">
        <i className="checkmark">✓</i>
      </div>
      <h1 className="SuccessH1">Success</h1>
      <p>
        We received your form data !
        <br />
      </p>
    </div>
  );
}

export default Success;
