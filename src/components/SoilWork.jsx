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

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    // setVal(e.label);
    console.log(e.label);
  };

  return (
    <Select
      placeholder="Select Option"
      // value={val}
      options={data} // set list of the data
      onChange={handleChange} // assign onChange function
    />
  );
}

export default SoilWork;
