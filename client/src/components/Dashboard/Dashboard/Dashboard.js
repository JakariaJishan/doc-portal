import React, { useEffect, useState } from "react";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const userEmail = sessionStorage.getItem("userEmail");
  const displayName = sessionStorage.getItem("displayName");
  useEffect(() => {
    fetch("http://localhost:5000/allPatients?email=" + userEmail, {
      headers: {
        headers: { "Content-Type": "application/json" },
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="absolute left-32 md:left-72 m-5 shadow-lg p-5">
      <p className="font-bold m-3 text-2xl">{displayName}</p>
      <table className="table-fixed ">
        <thead className='border'>
          <tr>
            <th className='p-3'>SL</th>
            <th className='p-3'>Name</th>
            <th className='p-3'>Contact</th>
            <th className='p-3'>Age</th>
            <th className='p-3'>Weight</th>
            <th className='p-3'>Service</th>
          </tr>
        </thead>
        
        {patients.map((items, index) => (
          <DashboardTable items={items} index={index} />
        ))}
        
      </table>
    </div>
  );
};

export default Dashboard;
