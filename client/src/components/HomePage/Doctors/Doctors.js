import React from "react";
import docpic from "../../../images/doctor-small.png";
import InnerDoctors from "./InnerDoctors";

const Doctors = () => {
  const doctorsObj = [
    {
      figure: docpic,
      name: "Dr. Caudi",
      phone: "012345678",
    },
    {
      figure: docpic,
      name: "Dr. Caudi",
      phone: "012345678",
    },
    {
      figure: docpic,
      name: "Dr. Caudi",
      phone: "012345678",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mt-12">
        <p className="text-textDefault font-bold text-2xl text-center">
          Our Doctors
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 text-center ">
        {doctorsObj.map((items) => (
          <InnerDoctors items={items} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
