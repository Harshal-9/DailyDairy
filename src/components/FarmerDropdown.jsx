import Select from "react-select";
import React, { useState } from "react";

function FarmerDropdown() {
  const aquaticCreatures = [
    { label: "None", value: "0" },
    { label: "Shark", value: "1" },
    { label: "Dolphin", value: "2" },
    { label: "Whale", value: "3" },
    { label: "Octopus", value: "4" },
    { label: "Crab", value: "5" },
    { label: "Lobster", value: "6" }
  ];

  const [val, setVal] = useState(0);

  return (
    <div>
      <label htmlFor="farmerdd">Select Farmer : </label>
      <Select
        value={aquaticCreatures[val].value}
        id="farmerdd"
        className="farmerDrop"
        options={aquaticCreatures}
        onChange={(opt) => {
          setVal(opt.value);
          console.log(opt.label, opt.value);
          console.log(val);
        }}
      />
    </div>
  );
}

export default FarmerDropdown;
