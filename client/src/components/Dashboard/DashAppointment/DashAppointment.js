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
    <div className="flex">
      <Calendar
        onChange={onChange}
        value={value}
        className="p-5 shadow-lg rounded text-center calender-style"
      />

      <AppointmentByDate appointmentData={appointmentData} />
    </div>
  );
};

export default DashAppointment;
