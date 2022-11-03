import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import OrderRow from './OrderRow';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { deleteShoppingCart } from '../../Utlities/SetToLocalStorage'
import { useForm } from 'react-hook-form';

const Checkout = ({ cart, total, quantity }) => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const date = new Date();
    const formatedDate = format(date, 'PP');

    // const { data: countrys, isLoading } = useQuery('country', () =>
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const onSubmit = async (data) => {
        const country = data.country;
        const customer_name = data.name;
        const customer_phone = data.phone;
        const company = data.company;
        const customer_address = data.address;
        const city = data.city;
        const state = data.state;
        const postcode = data.postcode;
        const customer_email = data.email;
        const order = {
            cart,
            date: formatedDate,
            user: user?.email,
            customer_name,
            customer_phone,
            customer_email,
            total,
            quantity,
            address: {
                company, customer_address, city, state, postcode, country
            }
        }
        fetch('https://gentle-peak-82604.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                }
                toast('your order is placed successfully');
                deleteShoppingCart();
            })
        reset();

    };

    let no = 1;

    return (
        <div className='mt-48 lg:mt-32 w-5/6 mx-auto mb-6'>
            <div className='mt-16'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<MdOutlineExpandMore className='text-2xl text-base-100' />}
                        sx={{ backgroundColor: '#5E5E5E', color: 'whitesmoke', borderRadius: '5px', borderTop: 6, borderColor: '#FE772F' }}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontSize: '12px', borderBottom: 2 }}>Do you have any cupon ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className=''>

                        <form className="flex items-center w-2/4 justify-center my-2">
                            <label htmlFor="simple-cupon" className="sr-only">cupon</label>
                            <div className="relative w-full flex justify-center">
                                <input type="text" id="simple-cupon" className="bg-gray-50 mr-4 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cupon" required />

                                <button type="button" className="text-white bg-purple-500 rounded-3xl text-md px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Apply</button>
                            </div>
                        </form>

                    </AccordionDetails>
                </Accordion>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 lg:grid-cols-2 gap-6  bg-zinc-200 pt-8'>
                <div className='px-6 order-2 lg:order-1'>
                    <h1 className='text-2xl text-gray-700 font-semibold uppercase'>Billing Information</h1>
                    <div className='divider my-4'></div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <select defaultValue="default"
                                {...register("category")}
                                className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-full p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                                <option value='default' disabled>select country</option>
                                <option>Bangladesh</option>
                                <option>China</option>
                                <option>Usa</option>
                                <option>Holand</option>
                            </select>
                            {/* {
                                    countrys?.map((country, index) => <option
                                        key={index}
                                        value={country.name?.common}
                                    >{country.name.common}
                                    </option>)
                                } */}
                        </div>
                        <div>
                            <input
                                type="text"
                                {...register("name")}
                                className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='your name' required />
                        </div>
                        <div>
                            <input
                                type="text"
                                {...register("company")}
                                className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='company' required />
                        </div>
                        <div>
                            <input
                                type="tel"
                                {...register("phone")}
                                className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='phone' required />
                        </div>
                        <div>
                            <input
                                type="text"
                                {...register("address")}
                                className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='address' required />
                        </div>
                        <div>
                            <input
                                type="text"
                                {...register("city")}
                                className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='city' required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            {...register("state")}
                            className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='state' required />
                    </div>
                    <div className="mb-6">
                        <input
                            type="number"
                            {...register("postcode")}
                            className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='post code' required />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            {...register("email")}
                            className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='your email' required />
                    </div>

                </div>
                <div className='pr-6 relative pb-10 order-1 lg:order-2 px-6 lg:px-0'>
                    <h1 className='text-2xl text-gray-700 font-semibold uppercase'>Your order</h1>
                    <div className='divider my-4'></div>

                    <div className="overflow-x-auto relative mt-10">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                                <tr>
                                    <th scope="col" className="py-3 px-6 rounded-l-lg">
                                        Serial No
                                    </th>
                                    <th scope="col" className="py-3 px-6 rounded-l-lg">
                                        Product Id
                                    </th>
                                    <th scope="col" className="py-3 px-6 rounded-l-lg">
                                        Product name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Qty
                                    </th>
                                    <th scope="col" className="py-3 px-6 rounded-r-lg">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map(item => <OrderRow
                                        key={item._id}
                                        item={item}
                                        no={no++}
                                    ></OrderRow>)
                                }
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white text-center">
                                    <th scope="row" className="py-3 px-6 text-base">Total</th>
                                    <td className="py-3 px-6"></td>
                                    <td className="py-3 px-6"></td>
                                    <td className="py-3 px-6">{quantity}</td>
                                    <td className="py-3 px-6">$ {total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className='order-3 px-6 lg:px-0'>
                    <input className='btn btn-goust w-full uppercase mb-4' type="submit" value='Place Order' />
                    <h1><span className='font-semibold'>Note:</span>  To confirm your order you have to complete your payment from <span className='font-semibold'>Dashboard then My orders</span></h1>
                </div>
            </form >
        </div >
    );
};

export default Checkout;