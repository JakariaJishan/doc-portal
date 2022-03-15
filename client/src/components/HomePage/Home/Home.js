import React from 'react';
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
        </div>
    );
};

export default Home;