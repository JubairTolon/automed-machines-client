import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SingleCartItem from './SingleCartItem';

const Cart = ({ subTotal, total, cart, handleRemoveCartItem }) => {

    return (
        <div className='lg:mt-32 mt-48 my-6'>
            <div className=" lg:w-3/5 w-5/6 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 text-center uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3  w-1/12">
                                Image
                            </th>
                            <th scope="col" className="py-3  w-1/12">
                                Product name
                            </th>
                            <th scope="col" className="py-3  w-1/12">
                                Unit Price
                            </th>
                            <th scope="col" className="py-3  w-1/12">
                                Quantity
                            </th>
                            <th scope="col" className="py-3  w-1/12">
                                Total
                            </th>
                            <th scope="col" className="py-3  w-1/12">
                                Remove Item
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(product => <SingleCartItem
                                key={product._id}
                                product={product}
                                handleRemoveCartItem={handleRemoveCartItem}
                            ></SingleCartItem>)
                        }
                    </tbody>
                </table>
                {
                    cart.length === 0 && <h1 className='text-center text-3xl font-semibold w-5/6 mx-auto text-gray-600 my-6'>Your cart is empty</h1>
                }
                <div className='flex justify-between mt-6 px-6'>
                    <div className='w-1/2'>
                        <div className=' flex gap-4'>
                            <button className='btn btn-goust hover:bg-orange-500 border-none'>Update cart</button>
                            <Link to='/shop'>
                                <button className='btn btn-goust hover:bg-orange-500 border-none'>Continue shopping</button>
                            </Link>

                        </div>
                        <div className='mt-6 w-1/2'>
                            <h1 className='text-2xl text-gray-700 font-semibold'>Coupon</h1>
                            <h1 className='text-lg text-gray-500 font-mormal'>Enter your coupon if you have one</h1>
                            <div className="relative w-full flex justify-center my-4">
                                <input type="text" id="simple-cupon" className="bg-gray-50 mr-4 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="coupon code" required />
                                <Button sx={{ backgroundColor: '#424949', borderRadius: '25px', px: 4, '&:hover': { backgroundColor: '#FF5733' } }} variant="contained">Apply</Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end w-1/2 gap-4'>
                        <div className='flex items-center gap-8'>
                            <h1 className='text-xl text-gray-700 font-semibold uppercase'>Subtotal</h1>
                            <h1 className='text-md text-gray-700 font-semibold'>$ {(subTotal).toFixed(2)}</h1>
                        </div>
                        <div className='flex items-center gap-8'>
                            <h1 className='text-2xl text-gray-700 font-bold uppercase'>Total</h1>
                            <h1 className='text-md text-gray-700 font-bold'>$ {(total)}</h1>
                        </div>
                        {cart?.length > 0 &&

                            <Link to='/checkout' className='mt-16'>
                                <button className='btn btn-goust hover:bg-orange-500 border-none'>Proceed To Checkout</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;