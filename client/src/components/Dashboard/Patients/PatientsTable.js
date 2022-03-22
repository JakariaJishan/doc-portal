import React from "react";

const PatientsTable = (props) => {
  const { name, contact,email, age , gender, service,weight } = props.items;
 
  return (
    <div>
      <div className="grid grid-cols-7  gap-3 font-bold my-3 ">
        <p >{props.index}</p>
        <p>{name}</p>
        <p >{contact}</p>
        <p >{age}</p>
        <p >{weight}</p>
        <p >{gender}</p>
        <p >{service}</p>

      </div>
    </div>
  );
};

export default PatientsTable;
