import React, { useState } from "react";
import FarmerDropdown from "./FarmerDropdown";
import RadioButton from "./RadioButton";
import PlotDropdown from "./PlotDropdown";
import Success from "./Success";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  var temp;

  const [finalDataObj, setFinalDataObj] = useState({
    Farmer: { FarmerId: "" },
    Plot: { PlotID: "" },
    Date: { ProposedDate: "" }
  });

  const [isvalid, setValid] = useState(false);

  function getFarmer(data) {
    temp = finalDataObj;
    temp.Farmer = data;
    setFinalDataObj(temp);
  }

  function getPlot(data) {
    temp = finalDataObj;
    temp.Plot = data;
    setFinalDataObj(temp);
  }

  const key = [1, 2, 3, 4, 5];

  function getFromRadio(data) {
    // console.log("In App : ", data);
    // console.log(data.type);

    switch (data.Type) {
      case 1:
        temp = finalDataObj;
        temp.Spraying = data.Data;
        setFinalDataObj(temp);
        break;

      case 2:
        temp = finalDataObj;
        temp.Fertilizer = data.Data;
        setFinalDataObj(temp);
        break;

      case 3:
        temp = finalDataObj;
        temp.FarmWork = data.Data;
        setFinalDataObj(temp);
        break;

      case 4:
        temp = finalDataObj;
        temp.SoilWork = data.Data;
        setFinalDataObj(temp);
        break;

      case 5:
        temp = finalDataObj;
        temp.Maintenance = data.Data;
        setFinalDataObj(temp);
        break;

      default:
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
                // console.log(finalDataObj);

                if (
                  finalDataObj.Farmer.FarmerId === "" ||
                  finalDataObj.Plot.PlotID === "" ||
                  finalDataObj.Date.ProposedDate === ""
                ) {
                  alert("Select Plot,Farmer and Date !");
                  // window.location.href = "/";
                  // return <Redirect to="/" />;
                  setValid(false);
                } else {
                  console.log("Form submitted");
                  console.log(finalDataObj);

                  setValid(true);
                  // window.location.href = "/Success";
                  // return <Redirect to="/Success" />;

                  // fetch("http://localhost:8000/blogs", {
                  //   method: "POST",
                  //   headers: { "content-Type": "application/json" },
                  //   body: JSON.stringify(finalDataObj)
                  // }).then(() => {
                  //   console.log("posted !");
                  // });
                }
              }}
            >
              Submit
            </button>
            <br />
            {isvalid ? <Redirect to="/Success" /> : null}
          </div>
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
