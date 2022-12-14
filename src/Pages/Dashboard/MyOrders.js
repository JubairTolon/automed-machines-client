import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUserOrders from '../../Hooks/useUserOrders';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { orders } = useUserOrders(user);

    const navigateToSingleOrder = (id) => {
        navigate(`singleOrder/${id}`)
    }
    return (
        <div>
            {orders?.length > 0 && <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Orders: {orders?.length}</h1>}
            {orders?.length > 0 ?
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Order Id
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Items
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total Qty
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Payment
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Shipped Status
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Order List
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order =>
                                    <tr
                                        key={order._id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {order._id}
                                        </th>
                                        <td className="py-4 px-6">
                                            {order.date}
                                        </td>
                                        <td className="py-4 px-6">
                                            {order.cart?.length}
                                        </td>
                                        <td className="py-4 px-6">
                                            {order.quantity}
                                        </td>
                                        <td className="py-4 px-6">
                                            {`$ ${order.total}`}
                                        </td>
                                        <td className="py-4 px-6">
                                            {!order.paid &&
                                                <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs rounded-sm btn-info text-white'>Pay</button></Link>}
                                            {order.paid &&
                                                <div>
                                                    <button disabled className='btn btn-xs rounded-sm btn-info'>Paid</button>
                                                    <p className='text-success'><span className='text-gray-600'>TransactionId:</span>  <br /> {order?.transactionId}</p>
                                                </div>
                                            }
                                        </td>
                                        <td className="py-4 px-6">
                                            {!order.shipped &&
                                                <div>
                                                    <div className='rounded-sm px-1 bg-teal-800 py-1 text-center font-semibold text-xs text-white uppercase'>Processing</div>
                                                </div>
                                            }
                                            {order.shipped &&
                                                <div>
                                                    <div disabled className='rounded-sm px-1 bg-teal-400 py-1 text-center font-semibold text-xs text-white uppercase'>Shipped</div>
                                                </div>
                                            }
                                        </td>
                                        <td className="py-4 px-6">
                                            <button onClick={() => navigateToSingleOrder(order._id)} className="btn btn-success font-medium text-white btn-xs dark:text-blue-500 py-1 rounded-sm">View Items</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div> :
                <div className='flex justify-center items-center'>
                    <h1 className='text-3xl'>You have no order</h1>
                </div>}
        </div>
    );
};

export default MyOrders;