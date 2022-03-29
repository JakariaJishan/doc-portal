import React, { useEffect, useState } from "react";
import PatientsTable from "./PatientsTable";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="absolute left-32 md:left-72 m-5 shadow-lg p-5">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="p-5 border-b">Sl</th>
            <th className="p-5 border-b">Name</th>
            <th className="p-5 border-b">Contact</th>
            <th className="p-5 border-b">Age</th>
            <th className="p-5 border-b">Weight</th>
            <th className="p-5 border-b">Gender</th>
            <th className="p-5 border-b">Service</th>
            <th className="p-5 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((items, index) => (
            <PatientsTable items={items} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
