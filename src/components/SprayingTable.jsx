import React from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";
import ChemicalDropDown from "./ChemicalDropDown";

function SprayingTable() {
  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Type</th>
          <th style={{ textAlign: "center" }}>Chemical</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <ChemicalDropDown />
          </td>
          <td>
            <input className="textInput"></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <ChemicalDropDown />
          </td>
          <td>
            <input className="textInput"></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <ChemicalDropDown />
          </td>
          <td>
            <input className="textInput"></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <ChemicalDropDown />
          </td>
          <td>
            <input className="textInput"></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <Spraying />
          </td>
          <td>
            <ChemicalDropDown />
          </td>
          <td>
            <input className="textInput"></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SprayingTable;
