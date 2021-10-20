import React, { useState } from "react";
import Select from "react-select";

function SelFunction() {
  const data = [
    {
      value: 1,
      label: "Insectiside"
    },
    {
      value: 2,
      label: "Fungiside"
    },
    {
      value: 3,
      label: "Herbiside"
    },
    {
      value: 4,
      label: "Nematiside"
    },
    {
      value: 5,
      label: "Growth Regulator"
    },
    {
      value: 6,
      label: "Seed Treatment"
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

export default SelFunction;
