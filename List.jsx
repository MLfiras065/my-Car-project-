import React from "react";
import ListCars from "./ListCars.jsx";

const List = (props) => (
  <div>
    <h3 className="listCars"> List Cars </h3>
   <h4 >There are {props.items.length} Cars.</h4> 
    {props.items.map((item, index) => (
      <div key={index}>
        <ListCars item={item} remove={props.deleCar} update={props.updaCar}/>
      </div>
    ))}
  </div>
);

export default List;
