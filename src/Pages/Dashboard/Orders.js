import React from 'react';
import { useNavigate } from 'react-router-dom';


const Orders = ({ allOrders }) => {
    const navigate = useNavigate();

    const navigateToSingleOrder = (id) => {
        navigate(`singleAdminOrder/${id}`)
    }

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Orders: {allOrders?.length}</h1>
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
                                User
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
                                Order List
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map(order =>
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
                                        {order.user}
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
                                        paid
                                    </td>
                                    <td className="py-4 px-6">
                                        <button onClick={() => navigateToSingleOrder(order._id)} className="btn btn-success font-medium text-white btn-xs dark:text-blue-500 py-1">View Items</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;