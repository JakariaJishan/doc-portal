import React from 'react';
import error from '../../images/dribbble_1.gif';
const Error = () => {
    return (
        <div className='grid place-items-center'>
            <p className='text-9xl text-gray-400 font-bold'>404!</p>
            <p className='font-bold text-gray-500 text-4xl'>Page Not Found</p>
            <img src={error} alt='sdf'></img>
        </div>
    );
};

export default Error;