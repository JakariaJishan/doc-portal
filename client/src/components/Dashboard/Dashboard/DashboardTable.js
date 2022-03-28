import React from "react";

const DashboardTable = (props) => {
  const { name, contact, age, weight , service, appointmentDate} = props.items;
  console.log(props);
  return (
    <tbody>
      <tr>
        <td className="p-3">{props.index + 1}</td>
        <td className="p-3">{name}</td>
        <td className="p-3">{contact}</td>
        <td className="p-3">{age}</td>
        <td className="p-3">{weight}</td>
        <td className="p-3">{service}</td>
      </tr>
    </tbody>
  );
};

export default DashboardTable;
