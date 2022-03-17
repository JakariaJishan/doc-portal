import React from 'react';

const InnerTestimonial = (props) => {
    const {title, img, name , location} = props.items;
    return (
        <div>
            <div className='shadow-lg p-6 rounded'>
                <p className='break-all text-[#B2B1B7]'>{title}</p>
                <div className='flex justify-start items-center  my-8'>
                    <img src={img} width='50px' alt='asd'></img>
                    <div className='ml-5 text-left'>
                        <p className='text-[#64CCCC] font-bold'>{name}</p>
                        <small className='text-[#C3C1C9]'>{location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerTestimonial;