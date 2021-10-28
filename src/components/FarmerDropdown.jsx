import Select from "react-select";
import React from "react";

function FarmerDropdown(props) {
  const aquaticCreatures = [
    { label: "None", value: 0 },
    { label: "Shark", value: 1 },
    { label: "Dolphin", value: 2 },
    { label: "Whale", value: 3 },
    { label: "Octopus", value: 4 },
    { label: "Crab", value: 5 },
    { label: "Lobster", value: 6 }
  ];

  const getFarmer = props.getFarmer;

  // const [lastSelectedFarmer, setLastSelectedFarmer] = useState("None");

  return (
    <div>
      <label htmlFor="farmerdd">Select Farmer : </label>
      <Select
        defaultValue={aquaticCreatures[0]}
        id="farmerdd"
        className="farmerDrop"
        options={aquaticCreatures}
        onChange={(opt) => {
          // setLastSelectedFarmer(opt.label);
          // console.log(opt.label, opt.value);
          // console.log("Last Selected : ", lastSelectedFarmer);
          // getFarmer(lastSelectedFarmer);
          // console.log("Last Selected : ", opt.label);
          getFarmer({ FarmerID: opt.label });
        }}
      />
    </div>
  );
}

export default FarmerDropdown;
