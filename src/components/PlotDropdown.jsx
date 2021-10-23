import React from "react";
import Select from "react-select";

function PlotDropdown() {
  const data = [
    {
      value: 0,
      label: "P1"
    },
    {
      value: 1,
      label: "P2"
    },
    {
      value: 2,
      label: "P3"
    },
    {
      value: 3,
      label: "P4"
    }
  ];

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    console.log(e.label);
  };

  return (
    <div>
      <label htmlFor="plotdd">Select plot : </label>
      <Select
        id="plotdd"
        className="plotDrop"
        options={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default PlotDropdown;
