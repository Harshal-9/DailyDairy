import React from "react";
import Maintenance from "./Maintenance";
import UploadImg from "./UploadImg";

function MaintenanceTable() {
  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Items</th>
          <th style={{ textAlign: "center" }}>Details</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

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
      </table>
    </div>
  );
}

export default MaintenanceTable;
