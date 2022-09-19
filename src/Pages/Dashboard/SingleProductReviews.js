import { Rating } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useLoadReviews from '../../Hooks/useLoadReviews';
import Loading from '../Shared/Loading';

const SingleProductReviews = () => {
    const { pId } = useParams();
    //Load reviews
    const { reviews, isLoading } = useLoadReviews();

    if (isLoading) {
        return <Loading></Loading>
    }

    const pReviews = reviews?.filter(review => review.productId === pId);

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Reviews for {pReviews[0].productId}</h1>
            <div className='flex gap-2'>
                {
                    pReviews?.map(pR => <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <p className="my-4 font-semibold">{pR.title}</p>
                            <p className="my-4 font-light">{pR.review}</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            {pR.userImg ?
                                <img className="w-9 h-9 rounded-full" src={pR.userImg} alt="profile" /> : <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>
                            }
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>{pR.user}</div>
                                <Rating name="half-rating" value={pR.rating} precision={0.5} readOnly />
                            </div>
                        </figcaption>
                    </figure>)
                }
            </div>
        </div>
    );
};

export default SingleProductReviews;