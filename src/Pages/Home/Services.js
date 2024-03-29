import React from 'react';
import background2 from '../../Assets/background2.jpg'
import './Services.css'
import { Zoom } from 'react-reveal';
import { motion } from "framer-motion";
import s1 from '../../Assets/service/1.png'
import s3 from '../../Assets/service/3.png'
import s4 from '../../Assets/service/4.png'

const Services = () => {

    return (
        // <div className="example-container">
        //     <motion.div className='inside' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        //         <motion.h1>'Quality Choice</motion.h1>
        //         <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
        //     </motion.div>
        //     <motion.div className='inside' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        //         <motion.h1>'Quality Choice</motion.h1>
        //         <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
        //     </motion.div>
        //     <motion.div className='inside' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        //         <motion.h1>'Quality Choice</motion.h1>
        //         <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
        //     </motion.div>

        <div className='mx-auto bg-cover w-full bg-no-repeat relative' style={{ height: '600px', backgroundImage: `url(${background2})` }}>
            <div className='opacity-80 bg-black absolute top-0 left-0 h-full w-full'></div>
            <div className='text-center mx-auto absolute w-1/2 left-0 right-0 z-10'>
                <h1 className='text-5xl font-bold text-orange-500 my-8'>Our service</h1>
            </div>
            <div className='mx-auto flex gap-12 justify-between absolute w-5/6 left-0 right-0 top-1/4'>
                <Zoom top>
                    {/* <div className='srvice w-1/3 bg-white text-gray-700 rounded drop-shadow-2xl'>
                        <div className='top-border'></div>
                        <h1 className='px-4 text-9xl my-8'><MdOutlinePrecisionManufacturing /></h1>
                        <h1 className='px-4 text-xl font-bold my-4'>Quality Choice</h1>
                        <p className='text-gray-700 my-8 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro, sequi libero corporis at saepe.</p>
                    </div> */}
                    <motion.div className='inside text-gray-800' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <img className="card-image" src={s1} alt="" />
                        <motion.h1>Quality Choice</motion.h1>
                        <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
                    </motion.div>
                    <motion.div className='inside text-gray-800' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <img className="card-image" src={s3} alt="" />
                        <motion.h1>Exclusive service</motion.h1>
                        <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
                    </motion.div>
                    <motion.div className='inside text-gray-800' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <img className="card-image" src={s4} alt="" />
                        <motion.h1>Fast and secure</motion.h1>
                        <motion.p>New Car Warranty service and repairs are also be carried out by the mechanics at Eltham Motors - be assured that your new car warranty is protected at our workshop we use genuine.</motion.p>
                    </motion.div>

                </Zoom>
            </div>
        </div>
    );
};

export default Services;