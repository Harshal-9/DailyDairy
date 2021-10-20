import React from "react";
import Date from "./Date";
import UploadImg from "./UploadImg";
import Dropdown from "./Dropdown";
import FarmerDropdown from "./FarmerDropdown";
import RadioButton from "./RadioButton";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Farmer's Digital Diary</h1>
      <hr /> <br />
      <FarmerDropdown />
      <br />
      <hr /> <br />
      <Date />
      <br />
      <hr /> <br />
      <UploadImg />
      <br />
      <hr />
      <br />
      <Dropdown />
      <br />
      <Dropdown />
      <br />
      <Dropdown />
      <br />
      <hr />
      <RadioButton />
      <br />
      <hr />
      <RadioButton />
    </div>
  );
}

export default App;
