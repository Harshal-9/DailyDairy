import React from "react";
import FarmWork from "./FarmWork";
import UploadImg from "./UploadImg";

function FarmWorkTable(props) {
  var getFromFarmWorkTable = props.getFromFarmWorkTable;

  var obtainedData = { row1: {}, row2: {}, row3: {}, row4: {}, row5: {} };

  function getFarmWorkData(data) {
    switch (data.RowNo) {
      case "1":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row1.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
        }
        break;

      case "2":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row2.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
        }
        break;

      case "3":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row3.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
        }
        break;

      case "4":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row4.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
        }
        break;

      case "5":
        switch (data.ColumnNo) {
          case "1":
            obtainedData.row5.FarmWork = data.FarmWork;
            getFromFarmWorkTable(obtainedData);
            break;

          default:
        }
        break;

      default:
    }
    // obtainedData.MaintainData = data;
  }

  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Work</th>
          <th style={{ textAlign: "center" }}>Details</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="1"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row1.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="2"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row2.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="3"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row3.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="4"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row4.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>

        <tr>
          <td>
            <FarmWork
              getFarmWorkData={getFarmWorkData}
              rowNo="5"
              columnNo="1"
            />
          </td>
          <td>
            <input
              onChange={(event) => {
                obtainedData.row5.Details = event.target.value;
                getFromFarmWorkTable(obtainedData);
              }}
              className="textInput"
            ></input>
          </td>
          <td>
            <UploadImg />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default FarmWorkTable;
