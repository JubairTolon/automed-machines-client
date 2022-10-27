import { Rating } from '@mui/material';
import React from 'react';
import Loading from '../Shared/Loading';

const AllProducts = ({ products, isLoading, search, searchHandler }) => {

    const getSearachTerm = (event) => {
        const text = event.target.value;
        searchHandler(text);
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='relative'>
            <div className='my-4 mb-4 sticky z-10'>
                <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Product: {products?.length}</h1>
                <div className='flex mx-1'>
                    <form className="flex items-center mr-4 w-1/3">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input value={search} onChange={getSearachTerm} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a product" />
                        </div>
                    </form>
                </div>

            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-2 px-2">
                                product Id
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Product
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Name
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Status
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Color
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Available
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Price
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Rating
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Ordered
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product =>
                                <tr
                                    key={product._id}
                                    className="bg-white border-b h-11 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th className="py-2 px-2">
                                        {product._id}
                                    </th>
                                    <th className="py-2 px-2">
                                        <img className='w-16' width='25%' src={product.pictures?.img1} alt="" />
                                    </th>
                                    <td className="py-2 px-2">
                                        {product.name}
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.stock}
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.color}
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.avaiableQuentty}
                                    </td>
                                    <td className="py-2 px-2">
                                        {`$ ${product.price}`}
                                    </td>
                                    <td className="py-2 px-2">
                                        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
                                    </td>
                                    <td className="py-2 px-2">
                                        {product.minOrder}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllProducts;