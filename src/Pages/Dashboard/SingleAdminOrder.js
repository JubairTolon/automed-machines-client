import React from 'react';
import { useParams } from 'react-router-dom';
import useLoadOrders from '../../Hooks/useLoadOrders';

const SingleAdminOrder = () => {
    const { orderId } = useParams();

    //for load all orders
    const { allOrders } = useLoadOrders();

    const order = allOrders?.find(order => order._id === orderId);
    const items = order?.cart;

    let total = 0;
    items?.map(item => total = total + ((item.minOrder + item.quantity) * item.price))
    return (
        <div>
            <div className="w-5/6 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="text-sm text-center text-gray-500 dark:text-gray-400">
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item =>
                                <tr
                                    key={item._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='mx-auto' width='25%' src={item.pictures?.img1} alt="" />
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.minOrder + item.quantity}
                                    </td>
                                    <td className="py-4 px-6">
                                        $ {(item.minOrder + item.quantity) * item.price}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
                <div className='flex items-center gap-8 float-right my-4 mr-20'>
                    <h1 className='text-2xl text-gray-700 font-bold uppercase'>Total</h1>
                    <h1 className='text-md text-gray-700 font-bold'>$ {(total).toFixed(2)}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleAdminOrder;