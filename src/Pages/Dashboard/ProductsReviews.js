import { IconButton } from '@mui/material';
import React from 'react';
import { MdOutlinePreview } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useLoadReviews from '../../Hooks/useLoadReviews';
import Loading from '../Shared/Loading';

const ProductsReviews = () => {
    const navigate = useNavigate();

    //load reviews
    const { reviews, isLoading } = useLoadReviews();

    if (isLoading) {
        return <Loading></Loading>
    }

    const navigateToReviews = (id) => {
        navigate(`singleProductReviews/${id}`)
    }

    const reviewProductIds = reviews.map(review => review.productId);
    const uniqueIds = [...new Set(reviewProductIds)];

    const singleProductReviews = uniqueIds.map(id => {
        const exits = reviews.filter(review => review.productId === id)
        return exits;
    });


    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Total reviews: {reviews?.length}</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-2 px-2">
                                Product Id
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Product
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Total reviews
                            </th>
                            {/* <th scope="col" className="py-2 px-2">
                                Rating
                            </th> */}
                            <th scope="col" className="py-2 px-2">
                                Availablle
                            </th>
                            <th scope="col" className="py-2 px-2">
                                Reviews
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleProductReviews?.map(review =>
                                <tr
                                    key={review[0]._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {review[0].productId}
                                    </th>
                                    <th className="py-2 px-2 ">
                                        <img className='w-12' width='10%' src={review[0].productImg} alt="" />
                                    </th>
                                    <td className="py-2 px-2">
                                        {review.length}
                                    </td>
                                    <td className="py-2 px-2">
                                        {review[0].available}
                                    </td>
                                    <td className="py-2 px-2">
                                        <IconButton onClick={() => navigateToReviews(review[0].productId)} aria-label="delete">
                                            <MdOutlinePreview />
                                        </IconButton>
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

export default ProductsReviews;