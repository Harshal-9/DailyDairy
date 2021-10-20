import React from "react";
import SelFunction from "./Spraying";
import Fertilizer from "./Fertilizer";
// import Maintenance from "./Maintenance";
import Date from "./Date";
import UploadImg from "./UploadImg";

function App() {
  return (
    <div className="App">
      <Date />
      <br />
      <UploadImg />
      <br />
      <table style={{ textAlign: "center" }}>
        <tr>
          <td style={{ textAlign: "center" }}>Type</td>
          <td style={{ textAlign: "center" }}>Chemical</td>
          <td style={{ textAlign: "center" }}>Quantity</td>
        </tr>
        <tr>
          <td>
            <SelFunction />
          </td>
          <td>
            <Fertilizer />
          </td>
          <td>
            <input></input>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
