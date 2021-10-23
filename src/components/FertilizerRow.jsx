import React from "react";
import Fertilizer from "./Fertilizer";
import UploadImg from "./UploadImg";

function FertilizerRow() {
  return (
    <div>
      <tr>
        <td>
          <Fertilizer />
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

export default FertilizerRow;
