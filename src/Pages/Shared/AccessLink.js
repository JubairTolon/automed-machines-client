import React from 'react';
import { Link } from 'react-router-dom';

const AccessLink = () => {

    return (
        <div className=' bg-gray-900 text-center py-2 text-gray-50 font-light fixed z-30 top-0 w-full'>
            <p className='text-xs lg:text-sm'>Learn about our <span>{new Date().getFullYear()}</span> products roadmap and what it means for you <Link className='font-bold hover:underline hover:decoration-2' to='/'>Access Now</Link></p>
        </div>
    );
};

export default AccessLink;