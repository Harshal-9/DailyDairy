import React, { useState } from "react";
import Dropdown from "./Dropdown";

function RadioButton(props) {
  const [isClicked, renderPage] = useState(false);

  function selectedRadio(event) {
    if (event.target.value === "YES") renderPage(true);
    else renderPage(false);
  }

  return (
    <div style={{ backgroundColor: isClicked === true ? "#f0fcfc" : "white" }}>
      <div onChange={selectedRadio}>
        <input type="radio" value="YES" name="radiogroup" /> YES
        <input type="radio" value="No" name="radiogroup" /> NO
      </div>
      <br />
      <div>{isClicked === true ? <Dropdown type={props.type} /> : null}</div>
    </div>
  );
}

export default RadioButton;
