import React from "react";
import SoilWork from "./SoilWork";
import UploadImg from "./UploadImg";

function SoilWorkRow() {
  return (
    <div>
      <tr>
        <td>
          <SoilWork />
        </td>
        <td>
          <input className="textInput"></input>
        </td>
        <td>
          <UploadImg />
        </td>
      </tr>
    </div>
  );
}

export default SoilWorkRow;
