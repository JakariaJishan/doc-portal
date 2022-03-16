import React from 'react';
import Appointment from '../Appointment/Appointment';
import Container from '../Container/Container';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import SuperHero from '../SuperHero/SuperHero';

const Home = () => {
    return (
        <div>
            <Container/>
            <SuperHero/>
            <Services/>
            <DentalCare/>
            <Appointment/>
        </div>
    );
};

export default Home;