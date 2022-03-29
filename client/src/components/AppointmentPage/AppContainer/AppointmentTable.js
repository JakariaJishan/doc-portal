import React from "react";

const AppointmentTable = (props) => {
  const { name, contact } = props.item;
  return (
    <tr>
      <td className="p-3">{name}</td>
      <td className="p-3">{contact}</td>
      <td className="p-3"><select>
          <option className="bg-textDefault">visited</option>
          <option>not visited</option>
        </select></td>
    </tr>
  );
};

export default AppointmentTable;
