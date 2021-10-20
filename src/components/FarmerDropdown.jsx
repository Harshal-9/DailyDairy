import Select from "react-select";
import React from "react";

function FarmerDropdown() {
  const aquaticCreatures = [
    { label: "None", value: "" },
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" }
  ];

  return (
    <div>
      <label htmlFor="farmerdd">Select Farmer : </label>
      <Select
        id="farmerdd"
        className="farmerDrop"
        options={aquaticCreatures}
        onChange={(opt) => console.log(opt.label, opt.value)}
      />
    </div>
  );
}

export default FarmerDropdown;
