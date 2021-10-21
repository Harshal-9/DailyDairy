import React, { useState } from "react";
import Dropdown from "./Dropdown";

// function

function RadioButton(props) {
  const [isClicked, renderPage] = useState(false);

  function selectedRadio(event) {
    if (event.target.value === "YES") renderPage(true);
    else renderPage(false);
  }

  return (
    <div>
      <div onChange={selectedRadio}>
        <input type="radio" value="YES" name="fertilizer" /> YES
        <input type="radio" value="No" name="fertilizer" /> NO
      </div>
      <div>{isClicked === true ? <Dropdown type={props.type} /> : null}</div>
    </div>
  );
}

export default RadioButton;
