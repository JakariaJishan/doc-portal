import React from "react";

const PatientsTable = (props) => {
  const { name, contact, email, age, gender, service, weight } = props.items;

  return (
      <tr>
        <td className="p-3">{props.index +1}</td>
        <td className="p-3">{name}</td>
        <td className="p-3">{contact}</td>
        <td className="p-3">{age}</td>
        <td className="p-3">{weight}</td>
        <td className="p-3">{gender}</td>
        <td className="p-3">{service}</td>
        <td className="p-3">{email}</td>
      </tr>
      
  );
};

export default PatientsTable;
