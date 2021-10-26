import React from "react";
import SoilWork from "./SoilWork";
import UploadImg from "./UploadImg";

function SoilWorkTable() {
  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Work</th>
          <th style={{ textAlign: "center" }}>Total Distance Covered</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

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
      </table>
    </div>
  );
}

export default SoilWorkTable;
