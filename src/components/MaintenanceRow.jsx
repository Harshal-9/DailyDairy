import React from "react";
import Maintenance from "./Maintenance";
import UploadImg from "./UploadImg";

function MaintenanceRow() {
  return (
    <div>
      <tr>
        <td>
          <Maintenance />
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

export default MaintenanceRow;
