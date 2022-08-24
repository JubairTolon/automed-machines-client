import { Accordion, AccordionDetails, AccordionSummary, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo, useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import countryList from 'react-select-country-list';
import CountrySelector from '../Shared/CountrySelector';
import OrderRow from './OrderRow';

const Checkout = ({ cart, total, quantity }) => {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

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
                            <form class="flex items-center w-2/4 justify-center my-2">
                                <label for="simple-cupon" class="sr-only">cupon</label>
                                <div class="relative w-full flex justify-center">
                                    <input type="text" id="simple-cupon" class="bg-gray-50 mr-4 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cupon" required />

                                    <button type="button" class="text-gray-900 bg-white  hover:bg-gray-100  rounded-3xl text-md px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Apply</button>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='grid grid-cols-2 gap-6  bg-zinc-200 pt-8'>
                <div className='px-6'>
                    <form>
                        <h1 className='text-2xl text-gray-700 font-semibold uppercase'>Billing Information</h1>
                        <div className='divider my-4'></div>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
                                <CountrySelector></CountrySelector>
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
                            </div>
                            <div>
                                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                                <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City/Town</label>
                                <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State/Country</label>
                            <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="postcode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Postcode/Zip</label>
                            <input type="number" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@company.com" required="" />
                        </div>
                    </form>
                </div>
                <div className='pr-6 relative pb-10'>
                    <h1 className='text-2xl text-gray-700 font-semibold uppercase'>Your order</h1>
                    <div className='divider my-4'></div>


                    <div class="overflow-x-auto relative mt-10">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                                <tr>
                                    <th scope="col" class="py-3 px-6 rounded-l-lg">
                                        Serial No
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-l-lg">
                                        Product name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Qty
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-r-lg">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map(item => <OrderRow
                                        key={item._id}
                                        item={item}
                                    ></OrderRow>)
                                }
                            </tbody>
                            <tfoot>
                                <tr class="font-semibold text-gray-900 dark:text-white text-center">
                                    <th scope="row" class="py-3 px-6 text-base">Total</th>
                                    <td class="py-3 px-6"></td>
                                    <td class="py-3 px-6">{quantity}</td>
                                    <td class="py-3 px-6">$ {total}</td>
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
                                <Typography sx={{ fontSize: '', fontWeight: 'bold' }}>Payment</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ borderRadius: '5px', backgroundColor: '#E8E8E8' }}>
                                <Typography>
                                    <div className='h-60'>Payment cart</div>
                                    <button className='btn btn-goust w-full right-4'>Place order</button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;