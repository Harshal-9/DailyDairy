import React from "react";
import Select from "react-select";

function FarmWork() {
  const data = [
    {
      value: 0,
      label: "None"
    },
    {
      value: 1,
      label: "Weeding"
    },
    {
      value: 2,
      label: "Mulching"
    },
    {
      value: 3,
      label: "Outer Bark removal"
    },
    {
      value: 4,
      label: "Thinning"
    },
    {
      value: 5,
      label: "Sticky trap installation"
    },
    {
      value: 6,
      label: "Fail shoot removal"
    },
    {
      value: 7,
      label: "Tying canes"
    },
    {
      value: 8,
      label: "Shoot tipping"
    },
    {
      value: 9,
      label: "Paper wrapping "
    },
    {
      value: 10,
      label: "Petiole analysis"
    },
    {
      value: 11,
      label: "Soil analysis"
    },
    {
      value: 12,
      label: "Foundation pruning"
    },
    {
      value: 13,
      label: "Fruit pruning "
    },
    {
      value: 14,
      label: "Cordon renewal"
    },
    {
      value: 15,
      label: "Girdling"
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

export default FarmWork;
