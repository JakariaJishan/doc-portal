import React from "react";

const AppointmentTable = (props) => {
  const { name, contact } = props.item;
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 font-bold my-3 ">
        <p>{name}</p>
        <p className="">{contact}</p>
        <select>
          <option className="bg-textDefault">visited</option>
          <option>not visited</option>
        </select>
      </div>
    </div>
  );
};

export default AppointmentTable;
