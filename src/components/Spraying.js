import React, { useState } from "react";
import Select from "react-select";

function Spraying(props) {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "Fertilizer"
    },
    {
      value: 2,
      label: "Fungicide"
    },
    {
      value: 3,
      label: "Insecticide"
    },
    {
      value: 4,
      label: "Organic"
    },
    {
      value: 5,
      label: "Plant Growth Regulator"
    }
  ];

  const [val, setVal] = useState(0);
  const handleSelectedType = props.handleSelectedType;

  // handle onChange event of the dropdown
  // function handleChange(e) {
  //   const selected = e.value;
  //   console.log(e.label);
  //   console.log(selected);
  //   setVal(selected);
  //   console.log(val);
  // }

  function later() {
    console.log(val);
  }

  const handleChange = (e) => {
    handleSelectedType(e.label);
    console.log(e);
    setVal(e.value);
    // console.log(val);
    later();
  };

  return (
    <div>
      <Select
        className="reactSelect"
        placeholder="Select Option"
        value={data.find((obj) => obj.value === val)} // set selected value
        // value={data[val].label}
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
  );
}

export default Spraying;
