import React from 'react';
import { Link } from 'react-router-dom';
import wheel from '../../Assets/wheel.png'

const AboutHome = () => {
    return (
        <div className="mx-auto w-10/12 lg:w-9/12 bg-base-200 px-4 py-8 lg:py-12">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="lg:text-left">
                    <h1 className='pb-12 font-bold text-lg text-orange-500'>About Us</h1>
                    <h1 className="text-5xl font-bold">More then 150+ Special Collection Here</h1>
                    <p className="py-6">New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop – we use ‘genuine or appropriate quality parts and oils (as advised by ACCC) - so make sure that you ask us about your right to choose your repairers</p>
                    <Link to='/aboutMore'>
                        <button className='btn bg-orange-500 mt-9 border-none'>More about Us</button>
                    </Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <img src={wheel} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;