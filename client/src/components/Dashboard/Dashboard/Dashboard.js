import React, { useEffect, useState } from 'react';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
        .then(res => res.json())
        .then(data => setPatients(data))
    }, [])
    
    return (
        <div className='absolute left-32 md:left-72'>
            <div className='grid grid-cols-4 gap-3 text-gray-500 my-3 '>
                <p>Sl</p> 
                <p>Date</p> 
                <p>Name</p> 
                <p>Contact</p> 
            </div>
           {
               patients.map((items,index) => <DashboardTable items={items} index={index}/>)
           }
           
        </div>
    );
};

export default Dashboard;