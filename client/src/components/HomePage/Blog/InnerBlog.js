import React from 'react';

const InnerBlog = (props) => {
    const {figure, name,title} = props.items;
    return (
        <div className='text-center p-5'>
            <div >
                <img src={figure} className='mx-auto' width={50} alt='fig'></img>
                <p className='font-bold text-gray-500 my-5'>{name}</p>
                <small className='text-gray-400'>{title}</small>
            </div>
        </div>
    );
};

export default InnerBlog;