import React, { useState } from "react";
import Spraying from "./Spraying";
import UploadImg from "./UploadImg";
import ChemicalDropDown from "./ChemicalDropDown";

function SprayingTable() {
  const [selectedType, setSelectedType] = useState("none");

  function handleSelectedType(gotSelected) {
    setSelectedType(gotSelected);
  }

  return (
    <div>
      <table>
        <tr>
          <th style={{ textAlign: "center" }}>Type</th>
          <th style={{ textAlign: "center" }}>Chemical</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Image</th>
        </tr>

        <tr>
          <td>
            <Spraying handleSelectedType={handleSelectedType} />
          </td>
          <td>
            <ChemicalDropDown selectedType={selectedType} />
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
            <Spraying handleSelectedType={handleSelectedType} />
          </td>
          <td>
            <ChemicalDropDown selectedType={selectedType} />
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
            <Spraying handleSelectedType={handleSelectedType} />
          </td>
          <td>
            <ChemicalDropDown selectedType={selectedType} />
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
            <Spraying handleSelectedType={handleSelectedType} />
          </td>
          <td>
            <ChemicalDropDown selectedType={selectedType} />
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
            <Spraying handleSelectedType={handleSelectedType} />
          </td>
          <td>
            <ChemicalDropDown selectedType={selectedType} />
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

export default SprayingTable;
