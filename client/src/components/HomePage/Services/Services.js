import React from 'react';
import cavity from '../../../images/cavity.png';
import flouride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import InnerServices from './InnerServices';
const Services = () => {
    const servicesObj =[
        {
            figure: flouride,
            name:'Flouride Treatment',
            title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
        },
        {
            figure: cavity,
            name:'Cavity Filling',
            title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
        },
        {
            figure: whitening,
            name:'Teeth Whitening',
            title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
        },
    ]
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='mt-12'>
            <p className='text-textDefault font-bold text-2xl text-center'>Our Services</p>
            <p className='text-default font-bold text-3xl md:text-4xl mt-3 text-center'>Services We Provide</p>
            </div>
            <div className='md:grid md:grid-cols-3 gap-5 p-5'>
                {
                    servicesObj.map(items => <InnerServices items={items}/>)
                }
            </div>
            
        </div>
    );
};

export default Services;
