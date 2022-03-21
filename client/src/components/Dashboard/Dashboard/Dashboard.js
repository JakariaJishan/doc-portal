import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashAppointment from '../DashAppointment/DashAppointment';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar/>
            <Routes>
                <Route path='appointment' element={<DashAppointment/>}/>
            </Routes>
           
        </div>
    );
};

export default Dashboard;