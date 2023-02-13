import React, { useState } from "react";

const AddCar = ({ addCar}) => {
  const [up,setUp]=useState(false)
  const [model,setModel] = useState("");
  const [description,setDescription] = useState("");
  const [year,setYear] = useState(0);

  return (
    <div className="list">
      <input type="text" placeholder="model" onChange={(e) => setModel(e.target.value)} />
      <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
       <input type="text" placeholder="year" onChange={(e) => setYear(e.target.value)} />
      <button onClick={() => {addCar(model,description,year),setUp(!up)}}>Add &#10004;</button>
    </div>
  );
};

export default AddCar;
