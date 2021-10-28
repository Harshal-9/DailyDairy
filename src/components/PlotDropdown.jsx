import React from "react";
import Select from "react-select";
import { useState } from "react";

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
    },
    {
      value: 4,
      label: "ALL"
    }
  ];

  const [val, setVal] = useState("default");

  const handleChange = (opt) => {
    setVal(opt.value);
    console.log(opt.label, opt.value);
  };

  return (
    <div>
      <label htmlFor="plotdd">Select plot : </label>
      <Select
        id="plotdd"
        value={val}
        className="plotDrop"
        options={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default PlotDropdown;
