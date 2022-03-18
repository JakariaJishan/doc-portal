import React from 'react';
import Footer from '../../HomePage/Footer/Footer';
import Nav from '../../HomePage/Nav/Nav';
import AppContainer from '../AppContainer/AppContainer';
import AppHero from '../AppHero/AppHero';

const AppointmentMain = () => {
    return (
        <div>
            <Nav/>
            <AppHero/>
            <AppContainer/>
            <Footer/>
        </div>
    );
};

export default AppointmentMain;