import React from "react";
import Fertilizer from "./Fertilizer";
import UploadImg from "./UploadImg";

function FertilizerTable() {
  return (
    <div>
      <h3 style={{ display: "inline-block" }}>
        Enter Number of hours of irrigation :
      </h3>
      <input style={{ display: "inline-block" }}></input>
      <br />

      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Fertilizer</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

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
      </table>
    </div>
  );
}

export default FertilizerTable;
