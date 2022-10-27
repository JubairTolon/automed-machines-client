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

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const getSearachTerm = (event) => {
        const text = event.target.value;
        setSearch(text);
        if (search !== '') {
            const newList = allOrders?.filter(product => {
                return Object.values(product)
                    .join(' ')
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            setSearchResult(newList);
        }
        else {
            setSearchResult(allOrders);
        }
    }

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Orders: {allOrders?.length}</h1>
            <form className="flex items-center mr-4 w-1/3 ml-1 mb-3">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input value={search} onChange={getSearachTerm} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a product" />
                </div>
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
                        {search < 1 ?
                            allOrders?.map(order =>
                                <SingleOrderRow
                                    key={order._id}
                                    order={order}
                                    setDeletingProduct={setDeletingProduct}
                                    refetch={refetch}
                                ></SingleOrderRow>)
                            : searchResult.map(order =>
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