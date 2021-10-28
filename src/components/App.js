import React from "react";
import FarmerDropdown from "./FarmerDropdown";
import RadioButton from "./RadioButton";
import PlotDropdown from "./PlotDropdown";

function App() {
  var finalDataObj = {};

  function getFarmer(data) {
    finalDataObj.Farmer = data;
  }

  function getPlot(data) {
    // console.log("Data recieved plot : ", data);
    finalDataObj.Plot = data;
  }

  const key = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <h1 className="heading">Farmer's Digital Diary</h1>
      <hr /> <br />
      <FarmerDropdown getFarmer={getFarmer} />
      <br />
      <hr /> <br />
      <PlotDropdown getPlot={getPlot} />
      <br />
      <hr /> <br />
      <label htmlFor="myDate">Select a Date : </label>
      <input
        onChange={(event) => {
          // console.log(event.target.value);
          finalDataObj.Date = { ProposedDate: event.target.value };
        }}
        type="date"
        id="myDate"
        name="myDate"
      />
      <br />
      <br />
      <hr />
      <h3>Was any spraying done today?</h3>
      <RadioButton type={key[0]} />
      <br />
      <hr />
      <h3>Was any fertilization + irrigation done today?</h3>
      <RadioButton type={key[1]} />
      <br />
      <hr />
      <h3>Was any work done in farm?</h3>
      <RadioButton type={key[2]} />
      <br />
      <hr />
      <h3>Any soil work done today?</h3>
      <RadioButton type={key[3]} />
      <br />
      <hr />
      <h3>Any maintenance work done today?</h3>
      <RadioButton type={key[4]} />
      <br />
      <hr />
      <h3>Any other work to be done?</h3>
      <textarea
        onChange={(event) => {
          finalDataObj.Notes = { Notes: event.target.value };
        }}
        className="description"
        placeholder="Type here... "
      ></textarea>
      <br />
      <hr />
      <button
        className="submitButton"
        onClick={() => {
          console.log("I m clicked");
        }}
      >
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          console.log(finalDataObj);
        }}
      >
        Print
      </button>
    </div>
  );
}

export default App;
