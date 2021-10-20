import React, { useState } from "react";
import Select from "react-select";

function SetMaintenance() {
  const data = [
    {
      value: 1,
      label: "Tractor"
    },
    {
      value: 2,
      label: "Dripline"
    },
    {
      value: 3,
      label: "Water-pump"
    },
    {
      value: 4,
      label: "Sprayer"
    },
    {
      value: 5,
      label: "Sand-Filter"
    },
    {
      value: 6,
      label: "Structure"
    }
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
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

export default SetMaintenance;
