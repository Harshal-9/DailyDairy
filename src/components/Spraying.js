import React from "react";
import Select from "react-select";

function Spraying() {
  const data = [
    {
      value: 0,
      label: "None"
    },
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

export default Spraying;
