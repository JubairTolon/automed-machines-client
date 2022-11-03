import { format } from 'date-fns';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Footer = () => {
    const date = new Date();
    const formatedDate = format(date, 'PP');

    const handleSubscription = (event) => {
        event.preventDefault();
        const subscriber = {
            date: formatedDate,
            user: event.target.email.value
        }
        fetch('https://gentle-peak-82604.herokuapp.com/subscription', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                }
                toast('Thanks for being with us');
            })
    }
    return (
        <div className='bg-gray-200'>
            <footer className='footer p-10'>
                <div className='grid grid-flow-row grid-cols-2 items-center justify-between w-full'>
                    <div className='mx-auto'>
                        <h1 className='text-5xl'>Get All Updates</h1>
                        <h3 className='text-xl my-8'>Sign up aur newsleter today. Also get alarts for new product.</h3>
                    </div>
                    <div className="relative mx-auto">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <span className='text-xl'><MdEmail /></span>
                        </div>
                        <form onSubmit={handleSubscription}>
                            <input name='email' type="email" className="block p-4 pl-10  w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer >
            <footer className="footer p-10 items-center justify-around">
                <div>
                    <span className="footer-title">Service</span>
                    <Link to="/" className="link link-hover">Blogs</Link>
                    <Link to="/" className="link link-hover">Checkout</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Cart</Link>
                </div>
                <div>
                    <span className="footer-title">Service</span>
                    <Link to="/" className="link link-hover">Blogs</Link>
                    <Link to="/" className="link link-hover">Checkout</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Cart</Link>
                </div>
                <div>
                    <span className="footer-title">Service</span>
                    <Link to="/" className="link link-hover">Blogs</Link>
                    <Link to="/" className="link link-hover">Checkout</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Cart</Link>
                </div>
                <div>
                    <footer className="footer px-10 py-4 border-t text-base-content">
                        <div className="md:place-self-center md:justify-self-end">
                            <div className="grid grid-flow-col gap-4">
                                <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><FaFacebookF /></span></Link>
                                <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><AiFillInstagram /></span></Link>
                                <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><AiOutlineTwitter /></span></Link>
                                <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><FaPinterestP /></span></Link>
                                <Link to='/'><span className='text-3xl text-gray-500 hover:text-orange-500 hover:cursor-pointer'><MdEmail /></span></Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </footer>
        </div >
    );
};

export default Footer;