import React from 'react';
import AppointmentTable from './AppointmentTable';

const AppointmentByDate = (props) => {
   const userData = props.appointmentData;
    return (
        <div className='shadow-xl mx-3 p-5'>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-textDefault'>Appointments</p>
                <p className='text-[#A6A4A4] text-sm'>{props.date}</p>
            </div>
            {
              userData.length? userData.map(item => <AppointmentTable item={item}/>): <p>no data found</p>
            }
        </div>
    );
};

export default AppointmentByDate;