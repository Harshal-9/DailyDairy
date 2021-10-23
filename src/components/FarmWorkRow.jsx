import React from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";

function FarmWorkRow() {
  return (
    <div>
      <tr>
        <td>
          <Spraying />
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
