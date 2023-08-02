import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const Contact = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const date = new Date();
    const formatedDate = format(date, 'PP');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: currentUser, isLoading } = useQuery(['user', user], () =>
        fetch(`https://automed-machines-server.vercel.app/profileInfo?user=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async (data) => {
        const message = {
            name: user.displayName,
            user: currentUser[0]?.email,
            gPhoto: user.photoURL,
            photo: currentUser[0]?.img,
            date: formatedDate,
            phone: data.phone,
            email: data.email,
            message: data.description,
        }
        console.log(message)
        fetch('https://automed-machines-server.vercel.app/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                }
                toast('your message is send successfully');
            })

        reset();
    };

    // const handleMessage = event => {
    //     event.preventDefault();
    //     const message = {
    //         name: user.displayName,
    //         user: user.email,
    //         photo: user.photoURL,
    //         date: formatedDate,
    //         phone: event.target.phone.value,
    //         email: event.target.email.value,
    //         message: event.target.message.value,
    //     }
    //     fetch('https://automed-machines-server.vercel.app/message', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(message)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //             }
    //             toast('your message is send successfully');
    //         })
    // }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-slate-100'>
            <div className='my-8 px-14'>
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
                    <div className='text-gray-800'>
                        <Bounce>
                            <h1 className='uppercase text-gray-700 text-3xl my-8'>Address</h1>
                        </Bounce>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className=''><FaLocationArrow /></h1>
                            </div>
                            <div>
                                <h1>Your Address Goes Here</h1>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className=''><HiPhone /></h1>
                            </div>
                            <div>
                                <h1>+660 256444 24857</h1>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center my-4'>
                            <div>
                                <h1 className=''><FaLocationArrow /></h1>
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
                    <h1 className='uppercase  text-4xl my-16'>send us a message</h1>
                </Bounce>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            name="name"
                            placeholder='your name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required',
                                }
                            })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        {

                            <label htmlFor="email">
                                {errors.name?.type === 'required' && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="email"
                            name="email"
                            placeholder='email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'provide a valid email'
                                }
                            })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                        {

                            <label htmlFor="email">
                                {errors.email?.type === 'required' && <span className='text-red-500 text-sm'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500 text-sm'>{errors.email?.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            placeholder='your phone number'
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone is required',
                                }
                            })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        {

                            <label htmlFor="email">
                                {errors.phone?.type === 'required' && <span className='text-red-500 text-sm'>{errors.phone.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea
                            {...register("description")}
                            name='description'
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="produc description..." required></textarea>
                    </div>

                    {/* error message */}
                    {/* {signInErrorMessage} */}

                    <button type="submit" value="Login" className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </form>
            </div>
        </div >
    );
};

export default Contact;