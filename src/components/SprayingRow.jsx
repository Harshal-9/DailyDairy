import React from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";

function SprayingRow() {
  return (
    <div>
      <td>
        <Spraying />
      </td>
      <td>
        <Spraying />
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
