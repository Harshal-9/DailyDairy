import React from "react";
import Select from "react-select";

function SoilWork() {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "Tilling"
    },
    {
      value: 2,
      label: "Rotavator"
    },
    {
      value: 3,
      label: "Stones removal"
    },
    {
      value: 4,
      label: "Bed formation"
    },
    {
      value: 5,
      label: "New soil application"
    }
  ];

  // const [val, setVal] = useState("default");

  const handleChange = (e) => {
    console.log(e.label);
  };

  return (
    <Select
      placeholder="Select Option"
      options={data}
      onChange={handleChange}
    />
  );
}

export default SoilWork;
