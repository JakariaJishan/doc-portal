import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import heroImg from "../../../images/chair.png";
import "./AppHero.css";
const AppHero = ({setAppointmentDate}) => {
  const [value, onChange] = useState(new Date());
  setAppointmentDate(value)
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 md:gap-3 my-3 ">
          <div className=" flex flex-col justify-center items-center  m-5 ">
            <p className="font-bold text-3xl my-5">APPOINMENT</p>
            <Calendar
              onChange={onChange}
              value={value}
              className="p-5 shadow-lg rounded text-center calender-style"
            />
          </div>
          <div className="md:flex md:items-center md:justify-center hidden md:block mx-auto w-4/5">
            <img src={heroImg} alt="hero img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHero;
