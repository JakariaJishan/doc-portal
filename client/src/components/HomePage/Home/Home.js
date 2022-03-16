import React from 'react';
import Appointment from '../Appointment/Appointment';
import Container from '../Container/Container';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import SuperHero from '../SuperHero/SuperHero';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Container/>
            <SuperHero/>
            <Services/>
            <DentalCare/>
            <Appointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;