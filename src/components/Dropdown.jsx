import React from "react";
import Spraying from "./Spraying";
import Fertilizer from "./Fertilizer";
import Maintenance from "./Maintenance";
import UploadImg from "./UploadImg";
import SprayingRow from "./SprayingRow";
import FertilizerRow from "./FertilizerRow";
import FarmWorkRow from "./FarmWorkRow";
import SoilWorkRow from "./SoilWorkRow";
import MaintenanceRow from "./MaintenanceRow";

function Dropdown(props) {
  return (
    <table className="myTable" style={{ textAlign: "center" }}>
      <tbody>
        <div>
          {props.type === 1 ? (
            <div>
              <tr>
                <th style={{ textAlign: "center" }}>Type</th>
                <th style={{ textAlign: "center" }}>Chemical</th>
                <th style={{ textAlign: "center" }}>Quantity</th>
                <th style={{ textAlign: "center" }}>Image</th>
              </tr>
              <tr>
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
              </tr>

              <SprayingRow />
              <SprayingRow />
              <SprayingRow />
              <SprayingRow />
            </div>
          ) : null}
          {props.type === 2 ? (
            <div>
              <h3 style={{ display: "inline-block" }}>
                Enter Number of hours of irrigation :
              </h3>
              <input style={{ display: "inline-block" }}></input>
              <br />
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
              <FertilizerRow />
              <FertilizerRow />
              <FertilizerRow />
              <FertilizerRow />
            </div>
          ) : null}

          {props.type === 3 ? (
            <div>
              <tr>
                <th style={{ textAlign: "center" }}>Work</th>
                <th style={{ textAlign: "center" }}>Details</th>
                <th style={{ textAlign: "center" }}>Image</th>
              </tr>
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

              <FarmWorkRow />
              <FarmWorkRow />
              <FarmWorkRow />
              <FarmWorkRow />
            </div>
          ) : null}
          {props.type === 4 ? (
            <div>
              <tr>
                <th style={{ textAlign: "center" }}>Work</th>
                <th style={{ textAlign: "center" }}>Total Distance Covered</th>
                <th style={{ textAlign: "center" }}>Image</th>
              </tr>
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

              <SoilWorkRow />
              <SoilWorkRow />
              <SoilWorkRow />
              <SoilWorkRow />
            </div>
          ) : null}
          {props.type === 5 ? (
            <div>
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
              <MaintenanceRow />
              <MaintenanceRow />
              <MaintenanceRow />
              <MaintenanceRow />
            </div>
          ) : null}
        </div>
      </tbody>
    </table>
  );
}

export default Dropdown;
