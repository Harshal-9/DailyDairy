import React from "react";
import Spraying from "./Spraying";
import Fertilizer from "./Fertilizer";
import Maintenance from "./Maintenance";
import UploadImg from "./UploadImg";

function Dropdown(props) {
  return (
    <table className="myTable" style={{ textAlign: "center" }}>
      <tbody>
        <div>
          {props.type === 1 ? (
            <div>
              <tr>
                <td style={{ textAlign: "center" }}>Type</td>
                <td style={{ textAlign: "center" }}>Chemical</td>
                <td style={{ textAlign: "center" }}>Quantity</td>
                <td style={{ textAlign: "center" }}>Image</td>
              </tr>
              <tr>
                <td>
                  <Spraying />
                </td>
                <td>
                  <Spraying />
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <UploadImg />
                </td>
              </tr>
            </div>
          ) : null}
          {props.type === 2 ? (
            <div>
              <tr>
                <td style={{ textAlign: "center" }}>Fertilizer</td>
                <td style={{ textAlign: "center" }}>Quantity</td>
                <td style={{ textAlign: "center" }}>Image</td>
              </tr>
              <tr>
                <td>
                  <Fertilizer />
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <UploadImg />
                </td>
              </tr>
            </div>
          ) : null}
          {props.type === 3 ? (
            <div>
              <tr>
                <td style={{ textAlign: "center" }}>Work</td>
                <td style={{ textAlign: "center" }}>Details</td>
                <td style={{ textAlign: "center" }}>Image</td>
              </tr>
              <tr>
                <td>
                  <Spraying />
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <UploadImg />
                </td>
              </tr>
            </div>
          ) : null}
          {props.type === 4 ? (
            <div>
              <tr>
                <td style={{ textAlign: "center" }}>Work</td>
                <td style={{ textAlign: "center" }}>Total Distance Covered</td>
                <td style={{ textAlign: "center" }}>Image</td>
              </tr>
              <tr>
                <td>
                  <Spraying />
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <UploadImg />
                </td>
              </tr>
            </div>
          ) : null}
          {props.type === 5 ? (
            <div>
              <tr>
                <td style={{ textAlign: "center" }}>Items</td>
                <td style={{ textAlign: "center" }}>Details</td>
                <td style={{ textAlign: "center" }}>Image</td>
              </tr>
              <tr>
                <td>
                  <Maintenance />
                </td>
                <td>
                  <input></input>
                </td>
                <td>
                  <UploadImg />
                </td>
              </tr>
            </div>
          ) : null}
        </div>
      </tbody>
    </table>
  );
}

export default Dropdown;
