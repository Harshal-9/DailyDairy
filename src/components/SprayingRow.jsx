import React from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";
import ChemicalDropDown from "./ChemicalDropDown";
function SprayingRow() {
  return (
    <div>
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
    </div>
  );
}

export default SprayingRow;
