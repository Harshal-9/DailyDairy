import React from "react";
import Date from "./Date";
import UploadImg from "./UploadImg";
import Dropdown from "./Dropdown";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Farmer's Digital Diary</h1>
      <hr />
      <Date />
      <br />
      <UploadImg />
      <br />
      <Dropdown />
      <Dropdown />
    </div>
  );
}

export default App;
