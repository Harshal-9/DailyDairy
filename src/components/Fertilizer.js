import React from "react";
import Select from "react-select";

function SetFertilizer() {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "SOP"
    },
    {
      value: 2,
      label: "SSP"
    },
    {
      value: 3,
      label: "DAP"
    },
    {
      value: 4,
      label: "Waste Decomposer"
    },
    {
      value: 5,
      label: "VBM"
    },
    {
      value: 6,
      label: "UREA"
    }
  ];

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    console.log(e.label);
  };

  return (
    <Select
      placeholder="Select Option"
      // value={data.find((obj) => obj.value === selectedValue)} // set selected value
      options={data} // set list of the data
      onChange={handleChange} // assign onChange function
    />
  );
}

export default SetFertilizer;
