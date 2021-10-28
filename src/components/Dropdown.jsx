import React from "react";
import SprayingTable from "./SprayingTable";
import FertilizerTable from "./FertilizerTable";
import FarmWorkTable from "./FarmWorkTable";
import SoilWorkTable from "./SoilWorkTable";
import MaintenanceTable from "./MaintenanceTable";

function Dropdown(props) {
  function getFromMaintainTable(data) {
    console.log(data);
  }

  function getFromFarmWorkTable(data) {
    console.log(data);
  }

  return (
    <table className="myTable" style={{ textAlign: "center" }}>
      <tbody>
        <div>
          {props.type === 1 ? (
            <div>
              <SprayingTable />
            </div>
          ) : null}

          {props.type === 2 ? (
            <div>
              <FertilizerTable />
            </div>
          ) : null}

          {props.type === 3 ? (
            <div>
              <FarmWorkTable getFromFarmWorkTable={getFromFarmWorkTable} />
            </div>
          ) : null}

          {props.type === 4 ? (
            <div>
              <SoilWorkTable />
            </div>
          ) : null}

          {props.type === 5 ? (
            <div>
              <MaintenanceTable getFromMaintainTable={getFromMaintainTable} />
            </div>
          ) : null}
        </div>
      </tbody>
    </table>
  );
}

export default Dropdown;
