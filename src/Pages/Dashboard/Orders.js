import React from 'react';
import { useState } from 'react';
import useLoadOrders from '../../Hooks/useLoadOrders';
import DeleteConfirmModal from '../Shared/DeleteConfirmModal';
import SingleOrderRow from './SingleOrderRow';

const Orders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const api = 'http://localhost:5000/order';


    //for load all orders
    const { allOrders, refetch } = useLoadOrders();

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Orders: {allOrders?.length}</h1>
            <form class="flex items-center mr-4 w-1/3 ml-1 mb-3">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a product" />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
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
                                Shipment
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Order List
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map(order =>
                                <SingleOrderRow
                                    key={order._id}
                                    order={order}
                                    setDeletingProduct={setDeletingProduct}
                                    refetch={refetch}
                                ></SingleOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                refetch={refetch}
                deletingProduct={deletingProduct}
                setDeletingProduct={setDeletingProduct}
                api={api}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default Orders;