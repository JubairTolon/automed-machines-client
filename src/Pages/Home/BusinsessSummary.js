import React from 'react';
import background3 from '../../Assets/background3.jpg'

const BusinsessSummary = () => {
    return (

        <div className='mx-auto bg-cover w-9/12 bg-no-repeat relative my-24' style={{ height: '600px', backgroundImage: `url(${background3})` }}>
            <div className='opacity-90 bg-black absolute top-0 left-0 h-full w-full'></div>
            <div className='text-center mx-auto absolute w-5/6 left-0 right-0 z-10 mt-14'>
                <h1 className='text-orange-500 font-bold text-5xl uppercase mb-8'>Millions of Customers Trust Us</h1>
                <h3 className='text-white text-xl font-semibold uppercase'>Try to under stand customer expectation</h3>
            </div>
            <div>
                <div className='flex flex-col'>
                    <span><HiOutlineFlag /></span>
                    <h1>72</h1>
                    <p>Countries</p>
                </div>
            </div>
        </div >

    );
};

export default BusinsessSummary;