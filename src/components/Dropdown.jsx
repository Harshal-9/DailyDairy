import React from "react";
import Spraying from "./Spraying";
import Fertilizer from "./Fertilizer";
import Maintenance from "./Maintenance";

function Dropdown() {
  return (
    <table className="myTable" style={{ textAlign: "center" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }}>Type</td>
          <td style={{ textAlign: "center" }}>Chemical</td>
          <td style={{ textAlign: "center" }}>Maintenance</td>
          <td style={{ textAlign: "center" }}>Quantity</td>
        </tr>
        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <Fertilizer />
          </td>
          <td>
            <Maintenance />
          </td>
          <td>
            <input></input>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Dropdown;
