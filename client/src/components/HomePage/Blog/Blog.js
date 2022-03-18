import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import InnerBlog from './InnerBlog';
const Blog = () => {
    const blogObj =[
        {
            figure: people1,
            name:'Dr. Rashed Kabir',
            heading:'Check at least a doctor in a year for your teeth',
            title:'It is a long established fact that by the readable content of a lot layout. The point',
        },
        {
            figure: people2,
            name:'Dr. Caoudi',
            heading:'2 times of brush in a day can  Keep you healthy',
            title:'It is a long established fact that by the readable content of a lot layout. The point'
        },
        {
            figure: people3,
            name:'Dr. Jack',
            heading:'The tooth cancer is taking a challenge',
            title:'It is a long established fact that by the readable content of a lot layout. The point'
        },
    ]
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='my-12'>
            <p className='text-textDefault font-bold text-2xl text-center'>Our Blog</p>
            <p className='text-default font-bold text-3xl md:text-4xl mt-3 text-center'>From Our Blog News</p>
            </div>
            <div className='md:grid md:grid-cols-3 gap-8 '>
                {
                    blogObj.map(items => <InnerBlog items={items}/>)
                }
            </div>
            
        </div>
    );
};

export default Blog;
