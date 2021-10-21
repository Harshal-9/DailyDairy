import React from "react";
import Date from "./Date";
import FarmerDropdown from "./FarmerDropdown";
import RadioButton from "./RadioButton";

function App() {
  const key = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Farmer's Digital Diary</h1>
      <hr /> <br />
      <FarmerDropdown />
      <br />
      <hr /> <br />
      <Date />
      <br />
      <br />
      <hr />
      <h5>Was any spraying done today?</h5>
      <RadioButton type={key[0]} />
      <br />
      <hr />
      <h5>Was any irrigation done today?</h5>
      <RadioButton type={key[1]} />
      <br />
      <hr />
      <h5>Was any work done in farm?</h5>
      <RadioButton type={key[2]} />
      <br />
      <hr />
      <h5>Any soil work done today?</h5>
      <RadioButton type={key[3]} />
      <br />
      <hr />
      <h5>Any maintenance work done today?</h5>
      <RadioButton type={key[4]} />
    </div>
  );
}

export default App;
