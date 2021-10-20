import React from "react";
import SelFunction from "./Spraying";
import Fertilizer from "./Fertilizer";

function Dropdown() {
  return (
    <div>
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

export default Dropdown;
