import React from "react";
import doctor from "../../../images/doctor.png";

const Appointment = () => {
  return (
    <div>
      <div className="mt-20 bg-slate-300 px-5">
        <div className="md:grid grid-cols-2 mt-5 ">
          <div className="flex justify-center items-center ">
            <img src={doctor} width='' className="object-cover h-48 md:h-auto w-60 md:w-auto -mt-20 lg:-mt-40" alt="sdf"></img>
          </div>
          <div className="md:flex items-center justify-center">
            <div className="text-center md:text-left">
              <p className="text-2xl text-[#19D3AF]">Appointment</p>
              <p className="text-2xl my-3 lg:text-5xl  text-default font-bold">
                Make an appointment today
              </p>
              <div className="my-3 text-gray-400 lg:text-3xl">
                <small>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at
                </small>
              </div>

              <button className="bg-gradient-to-r from-[#19D3AF] to-[#0FCFEA]  px-4 py-2 font-bold text-white rounded mb-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
