import React from 'react';
import background3 from '../../Assets/background3.jpg'
import { BsFlag } from 'react-icons/bs';
import { GiBattleship } from 'react-icons/gi';
import { BiHappyBeaming } from 'react-icons/bi';
import { VscPreview } from 'react-icons/vsc';
import { Bounce, Slide } from 'react-reveal';

const BusinsessSummary = () => {
    return (

        <div className='mx-auto bg-cover w-9/12 bg-no-repeat relative my-16' style={{ height: '600px', backgroundImage: `url(${background3})` }}>
            <div className='opacity-90 bg-black absolute top-0 left-0 h-full w-full'></div>
            <div className='text-center mx-auto absolute w-5/6 left-0 right-0 z-10 mt-8'>
                <Bounce bottom>
                    <h1 className='text-orange-500 font-bold text-3xl lg:text-4xl uppercase mb-6'>Millions of Customers Trust Us</h1>
                </Bounce>
                <h3 className='text-white text-md lg:text-xl font-semibold uppercase'>Try to under stand customer expectation</h3>
            </div>
            <Slide bottom>
                <div className='w-5/6 absolute z-10 grid grid-flow-col grid-rows-2 lg:grid-rows-1 justify-around mx-auto left-0 right-0 top-48 lg:top-44 '>
                    <div className='flex flex-col'>
                        <span className='lg:text-6xl text-3xl pl-3 text-orange-500'><GiBattleship /></span>
                        <h1 className='lg:text-5xl text-xl text-white font-bold'>1100+</h1>
                        <p className='text-orange-500 mt-4 uppercase'>Shipments</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='lg:text-6xl text-3xl text-orange-500'><BsFlag /></span>
                        <h1 className='lg:text-5xl text-xl text-white font-bold'>32</h1>
                        <p className='text-orange-500 mt-4 uppercase'>Country</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='lg:text-6xl text-3xl text-orange-500 pl-3'><BiHappyBeaming /></span>
                        <h1 className='lg:text-5xl text-xl text-white font-bold'>950+</h1>
                        <p className='text-orange-500 mt-4 uppercase'>Happy Client</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='lg:text-6xl text-3xl text-orange-500'><VscPreview /></span>
                        <h1 className='lg:text-5xl text-xl text-white font-bold'>800+</h1>
                        <p className='text-orange-500 mt-4 uppercase'>feedbacks</p>
                    </div>
                </div>
            </Slide>
            <div className='w-5/6 h-36 bg-slate-50 rounded p-6 absolute z-10 mx-auto left-0 right-0 flex justify-around bottom-10'>
                <div>
                    <h1 className='text-xl lg:text-2xl font-bold text-bold mb-4 text-gray-700'>Have any question about our <br /> product or service?</h1>
                </div>
                <div>
                    <h1 className='text-xl lg:text-2xt text-orange-500 mb-6 font-bold'>Get update about us</h1>
                    <div className='flex gap-6 lg:gap-8'>
                        <button className='btn btn-primary btn-xs lg:btn-md rounded'>Subscription</button>
                        <button className='btn btn-outline rounded btn-xs lg:btn-md'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default BusinsessSummary;