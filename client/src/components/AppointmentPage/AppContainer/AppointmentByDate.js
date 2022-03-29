import React from "react";
import AppointmentTable from "./AppointmentTable";

const AppointmentByDate = (props) => {
  const userData = props.appointmentData;
  return (
    <div className="shadow-xl mx-3 p-5">
      <div className="flex justify-between items-center mb-5">
        <p className="text-textDefault">Appointments</p>
        <p className="text-[#A6A4A4] text-sm">{props.date}</p>
      </div>
      <table className="table-auto ">
        <thead>
          <tr>
            <th className="p-5">Name</th>
            <th className="p-5">Schedule</th>
            <th className="p-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length ? (
            userData.map((item) => <AppointmentTable item={item} />)
          ) : (
            <p>no data found</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentByDate;
