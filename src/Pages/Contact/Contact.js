import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { Bounce, Flip } from 'react-reveal';
import { Link } from 'react-router-dom';


const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div className='mt-32 grid grid-cols-1 lg:grid-cols-2'>
            <div className='my-16 px-14'>
                <div>
                    <div>
                        <Bounce>
                            <h1 className='uppercase text-gray-600 text-4xl'>Get in Touch</h1>
                        </Bounce>
                        <p className='text-gray-600 text-md my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedoo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim aid minim veniam, quihhs nostrud exercitation.</p>
                    </div>
                    <Bounce>
                        <div className='grid grid-cols-5 w-1/3 mb-36'>
                            <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><FaFacebookF /></span></Link>
                            <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><AiFillInstagram /></span></Link>
                            <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><AiOutlineTwitter /></span></Link>
                            <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><FaPinterestP /></span></Link>
                            <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><MdEmail /></span></Link>
                        </div>
                    </Bounce>
                    <div>
                        <Bounce>
                            <h1 className='uppercase text-gray-600 text-3xl my-8'>Address</h1>
                        </Bounce>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className='text-gray-500'><FaLocationArrow /></h1>
                            </div>
                            <div>
                                <h1>Your Address Goes Here</h1>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className='text-gray-500'><HiPhone /></h1>
                            </div>
                            <div>
                                <h1>+660 256444 24857</h1>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className='text-gray-500'><FaLocationArrow /></h1>
                            </div>
                            <div>
                                <h1>Info@Example.Com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 mx-auto'>
                <Bounce>
                    <h1 className='uppercase text-gray-600 text-4xl my-16'>send us a message</h1>
                </Bounce>
                <form>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div className='relative z-0 mb-6 w-full group'>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </form>
            </div>
        </div >
    );
};

export default Contact;