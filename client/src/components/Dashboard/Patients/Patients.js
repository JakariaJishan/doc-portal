import React, { useEffect, useState } from 'react';
import PatientsTable from './PatientsTable';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/patients')
        .then(res => res.json())
        .then(data => setPatients(data))
    }, [])
    
    return (
        <div className='absolute left-32 md:left-72 m-5 shadow-lg p-5'>
            <div className='grid grid-cols-7 gap-3  text-gray-500 my-3 '>
                <p>Sl</p> 
                <p>Name</p> 
                <p>Contact</p> 
                <p>Age</p> 
                <p>Weight</p> 
                <p>Gender</p> 
                <p>Service</p> 
            </div>
           {
               patients.map((items,index) => <PatientsTable items={items} index={index}/>)
           }
           
        </div>
    );
};

export default Patients;