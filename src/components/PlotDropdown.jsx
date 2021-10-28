import React from "react";
import Select from "react-select";

function PlotDropdown(props) {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "P1"
    },
    {
      value: 2,
      label: "P2"
    },
    {
      value: 3,
      label: "P3"
    },
    {
      value: 4,
      label: "P4"
    },
    {
      value: 5,
      label: "ALL"
    }
  ];

  const getPlot = props.getPlot;

  const handleChange = (opt) => {
    // console.log(opt.label, opt.value);
    getPlot({ PlotID: opt.label });
  };

  return (
    <div>
      <label htmlFor="plotdd">Select plot : </label>
      <Select
        defaultValue={data[0]}
        id="plotdd"
        className="plotDrop"
        options={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default PlotDropdown;
