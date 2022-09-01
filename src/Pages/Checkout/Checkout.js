import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import OrderRow from './OrderRow';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { deleteShoppingCart } from '../../Utlities/SetToLocalStorage'

const Checkout = ({ cart, total, quantity }) => {
    const [user] = useAuthState(auth);
    const date = new Date();
    const formatedDate = format(date, 'PP');

    // const { data: countrys, isLoading } = useQuery('country', () =>
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const handleOrder = event => {
        event.preventDefault();
        const country = event.target.country.value;
        const customer_name = event.target.name.value;
        const customer_phone = event.target.phone.value;
        const company = event.target.company.value;
        const customer_address = event.target.address.value;
        const city = event.target.city.value;
        const state = event.target.state.value;
        const postcode = event.target.postcode.value;
        const customer_email = event.target.email.value;
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
        fetch('http://localhost:5000/order', {
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
            })
        deleteShoppingCart();
    }
    let no = 1;

    return (
        <div className='mt-32 w-5/6 mx-auto'>
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
                        <Typography>
                            <form className="flex items-center w-2/4 justify-center my-2">
                                <label for="simple-cupon" className="sr-only">cupon</label>
                                <div className="relative w-full flex justify-center">
                                    <input type="text" id="simple-cupon" className="bg-gray-50 mr-4 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cupon" required />

                                    <button type="button" className="text-gray-900 bg-white  hover:bg-gray-100  rounded-3xl text-md px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Apply</button>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <form onSubmit={handleOrder} className='grid grid-cols-2 gap-6  bg-zinc-200 pt-8'>
                <div className='px-6'>

                    <h1 className='text-2xl text-gray-700 font-semibold uppercase'>Billing Information</h1>
                    <div className='divider my-4'></div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
                            <select defaultValue="default" name='country' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full max-w-xs'>
                                {/* {
                                    countrys?.map((country, index) => <option
                                        key={index}
                                        value={country.name?.common}
                                    >{country.name.common}
                                    </option>)
                                } */}
                                <option value='default'>Bangladesh</option>
                                <option>China</option>
                                <option>Usa</option>
                                <option>Kuria</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                            <input name='name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                            <input name='company' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input name='phone' type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                            <input name='address' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City/Town</label>
                            <input name='city' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State/Country</label>
                        <input name='state' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Postcode/Zip</label>
                        <input name='postcode' type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <input name='email' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@company.com" required />
                    </div>

                </div>
                <div className='pr-6 relative pb-10'>
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
                    <div>
                        <Accordion className='my-8'>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore className='text-2xl text-base-100' />}
                                sx={{ backgroundColor: '#5E5E5E', color: 'whitesmoke', borderRadius: '5px', borderTop: 6, borderColor: '#2FC2FE' }}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>Payment</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ borderRadius: '5px', backgroundColor: '#E8E8E8' }}>
                                <Typography>
                                    <div className='h-60'>Payment cart</div>
                                    <input className='btn btn-goust w-full uppercase' type="submit" value='Place Order' />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default Checkout;