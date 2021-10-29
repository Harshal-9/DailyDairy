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
    finalDataObj.Plot = data;
  }

  const key = [1, 2, 3, 4, 5];

  function getFromRadio(data) {
    // console.log("In App : ", data);
    // console.log(data.type);

    switch (data.Type) {
      case 1:
        finalDataObj.Spraying = data.Data;
        break;

      case 2:
        finalDataObj.Fertilizer = data.Data;
        break;

      case 3:
        finalDataObj.FarmWork = data.Data;
        break;

      case 4:
        finalDataObj.SoilWork = data.Data;
        break;

      case 5:
        finalDataObj.Maintenance = data.Data;
        break;

      default:
    }
  }

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
      <RadioButton type={key[0]} getFromRadio={getFromRadio} />
      <br />
      <hr />
      <h3>Was any fertilization + irrigation done today?</h3>
      <RadioButton type={key[1]} getFromRadio={getFromRadio} />
      <br />
      <hr />
      <h3>Was any work done in farm?</h3>
      <RadioButton type={key[2]} getFromRadio={getFromRadio} />
      <br />
      <hr />
      <h3>Any soil work done today?</h3>
      <RadioButton type={key[3]} getFromRadio={getFromRadio} />
      <br />
      <hr />
      <h3>Any maintenance work done today?</h3>
      <RadioButton type={key[4]} getFromRadio={getFromRadio} />
      <br />
      <hr />
      <h3>Any other work to be done?</h3>
      <br />
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
          console.log(finalDataObj);
        }}
      >
        Submit
      </button>
      <br />
    </div>
  );
}

export default App;
