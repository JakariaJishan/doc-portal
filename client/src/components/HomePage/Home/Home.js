import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Container from '../Container/Container';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import SuperHero from '../SuperHero/SuperHero';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div id='home'>
            <Container/>
            <SuperHero/>
            <Services/>
            <DentalCare/>
            <Appointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
            <ContactUs/>
            <Footer/>
            
        </div>
    );
};

export default Home;