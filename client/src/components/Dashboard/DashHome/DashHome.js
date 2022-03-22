import React from "react";
import { Route, Routes } from "react-router-dom";
import DashAppointment from "../DashAppointment/DashAppointment";
import Dashboard from "../Dashboard/Dashboard";
import Patients from "../Patients/Patients";
import Sidebar from "../Sidebar/Sidebar";

const DashHome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="appointment" element={<DashAppointment />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
      </Routes>
    </div>
  );
};

export default DashHome;
