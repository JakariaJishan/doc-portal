import React from 'react';

const AppointmentByDate = (props) => {
   const userData = props.appointmentData;
    return (
        <div>
            {userData.length}
            {
              userData.length? userData.map(item => <div>
                    <h3>{item.name}</h3>
                </div>): <p>no data found</p>
            }
        </div>
    );
};

export default AppointmentByDate;