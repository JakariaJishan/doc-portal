import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InnerDoctors = (props) => {
  const { figure, name, phone } = props.items;
  return (
    <div className="mx-auto my-8">
      <div className="text-center ">
        <img src={figure} width="200px" alt="sdf"></img>
        <p className="text-xl font-bold text-default my-2">{name}</p>
        <p className="text-gray-400"><FontAwesomeIcon icon={faPhone} className='text-textDefault mx-2'/>{phone}</p>
      </div>
    </div>
  );
};

export default InnerDoctors;
