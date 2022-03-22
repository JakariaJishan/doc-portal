import React from "react";

const DashboardTable = (props) => {
  const { name, contact,email } = props.items;
 
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 font-bold my-3 ">
        <p >{props.index}</p>
        <p>{email}</p>
        <p>{name}</p>
        <p >{contact}</p>
      </div>
    </div>
  );
};

export default DashboardTable;
