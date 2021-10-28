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

  function later() {
    console.log(val);
  }

  const handleChange = (e) => {
    handleSelectedType(e.label);
    console.log(e);
    setVal(e.value);
    later();
  };

  return (
    <div>
      <Select
        className="reactSelect"
        placeholder="Select Option"
        value={data.find((obj) => obj.value === val)}
        options={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default Spraying;
