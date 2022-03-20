import React, { createContext, useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import Nav from '../../HomePage/Nav/Nav';
import AppContainer from '../AppContainer/AppContainer';
import AppHero from '../AppHero/AppHero';

export const myContext = createContext('');
const AppointmentMain = () => {
    const [appointmentDate, setAppointmentDate] = useState('');
    return (
        <myContext.Provider value={appointmentDate}>
            <Nav/>
            <AppHero setAppointmentDate={setAppointmentDate}/>
            <AppContainer/>
            <Footer/>
        </myContext.Provider>
    );
};

export default AppointmentMain;