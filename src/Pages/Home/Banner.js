import React from 'react';
import { Link } from 'react-router-dom';
import { Bounce, Slide } from 'react-reveal';
import bannerBack from '../../Assets/basnnerWithoutCar.jpg'
import car from '../../Assets/car.png'
import { MdLocalPhone } from 'react-icons/md';

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto" style={{ backgroundImage: `url(${bannerBack})` }}>
            <div class="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-2 text-black items-center">
                <div class="order-2 lg:order-1 lg:px-0 px-16 lg:my-8 my-4">
                    <div className='mb-5 text-6xl font-bold'>
                        <Bounce left>
                            <h1 class="">Search and find your best car rental with easy way</h1>
                        </Bounce>
                    </div>
                    <p class="my-16">New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop – we use ‘genuine or appropriate quality parts and oils (as advised by ACCC) - so make sure that you ask us about your right to choose your repairer.</p>
                    <div className='flex gap-4 text-gray-700'>
                        <button class="btn btn-primary bg-orange-500 border-none">Buy Now <span className='ml-2 text-xl'><MdLocalPhone></MdLocalPhone></span></button>
                        <button>
                            <Link to='/product' class="link link-hover font-bold">See all parts</Link>
                        </button>
                    </div>
                </div>
                <div className='lg:order-2 order-1'>
                    <Slide right>
                        <img src={car} alt="" />
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Banner;