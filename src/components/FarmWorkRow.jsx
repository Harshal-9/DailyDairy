import React from "react";
import FarmWork from "./FarmWork";
import UploadImg from "./UploadImg";

function FarmWorkRow() {
  return (
    <div>
      <tr>
        <td>
          <FarmWork />
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

export default FarmWorkRow;
