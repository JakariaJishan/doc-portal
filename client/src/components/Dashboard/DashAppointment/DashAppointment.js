import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import AppointmentByDate from "../../AppointmentPage/AppContainer/AppointmentByDate";

const DashAppointment = () => {
  const [value, onChange] = useState(new Date());
  const [appointmentData, setAppointmentData] = useState([]);
  let newDate = value.toString();
  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newDate }),
    })
      .then((res) => res.json())
      .then((result) => setAppointmentData(result));
  }, [newDate]);
  return (
    <div className="left-32 absolute ">
      <p className="font-bold m-3">Appointments</p>
      <div className="grid md:grid-cols-2 gap-5">
      <Calendar
        onChange={onChange}
        value={value}
        className="p-5 mx-3 h-10 shadow-lg rounded w-full text-center calender-style"
      />
      <AppointmentByDate appointmentData={appointmentData} date={format(value, "LLLL dd, yyyy")} />
      </div>
      
    </div>
  );
};

export default DashAppointment;
