import React from "react";
import appoinmentBg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
const Appointment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${appoinmentBg})`,
        backgroundRepeat: "no-repeat",
     
      }}
    >
      <div className="backdrop-opacity-10  bg-default/90">
        <div className="mt-20  px-5">
          <div className="md:grid grid-cols-2 mt-5 ">
            <div className="flex justify-center items-center ">
              <img
                src={doctor}
                width=""
                className="object-cover h-48 md:h-auto w-60 md:w-auto -mt-20 lg:-mt-40"
                alt="sdf"
              ></img>
            </div>
            <div className="md:flex items-center justify-center">
              <div className="text-center md:text-left">
                <p className="text-2xl text-[#19D3AF] font-bold">Appointment</p>
                <p className="text-2xl my-3 lg:text-5xl  text-white font-bold">
                  Make an appointment today
                </p>
                <div className="my-3 text-gray-300 lg:text-3xl">
                  <small>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                  </small>
                </div>

                <button className="btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
