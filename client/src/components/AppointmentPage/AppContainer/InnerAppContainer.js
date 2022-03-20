import React, { useState } from "react";
import Modal from "./Modal";

const InnerAppContainer = (props) => {
  const { name, time } = props.items;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="shadow-lg p-8 rounded-md">
        <p className="text-xl text-textDefault font-semibold">{name}</p>
        <p className="font-bold my-2">{time}</p>
        <p className="text-sm text-gray-400 my-4">10 space availabe</p>
        <button className="btn" onClick={() => setShowModal(true)}>BOOK APPOINTMENT</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} name={name} />
      
    </div>
  );
};

export default InnerAppContainer;
