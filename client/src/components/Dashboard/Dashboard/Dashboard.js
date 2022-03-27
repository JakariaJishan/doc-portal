import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../App";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const value = useContext(LoginContext);
  const userEmail= sessionStorage.getItem('userEmail');
  useEffect(() => {
    fetch("http://localhost:5000/allPatients?email="+userEmail, {
      headers: {
        headers: { 'Content-Type': 'application/json'},
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="absolute left-32 md:left-72 m-5 shadow-lg p-5">
      <div className="grid grid-cols-4 gap-3 text-gray-500 my-3 ">
        <p>Sl</p>
        <p>Email</p>
        <p>Name</p>
        <p>Contact</p>
      </div>
      {patients.map((items, index) => (
        <DashboardTable items={items} index={index} />
      ))}
    </div>
  );
};

export default Dashboard;
