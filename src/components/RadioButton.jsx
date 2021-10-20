import React, { useState } from "react";
import Dropdown from "./Dropdown";

// function

function RadioButton() {
  const [isClicked, renderPage] = useState(false);

  function selectedRadio(event) {
    if (event.target.value === "YES") renderPage(true);
    else renderPage(false);
  }

  return (
    <div>
      <div onChange={selectedRadio}>
        <input type="radio" value="YES" name="checkRadio" /> YES
        <input type="radio" value="No" name="checkRadio" /> NO
      </div>
      <div>{isClicked === true ? <Dropdown /> : null}</div>
    </div>
  );
}

export default RadioButton;
