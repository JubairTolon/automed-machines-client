import { Rating } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProductReviews = ({ reviews }) => {
    const { pId } = useParams();
    const pReviews = reviews.filter(review => review.productId === pId);

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Reviews for {pReviews[0].productId}</h1>
            <div className='flex gap-2'>
                {
                    pReviews.map(pR => <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                            <p className="my-4 font-semibold">{pR.title}</p>
                            <p className="my-4 font-light">{pR.review}</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src={pR?.userImg} alt="profile" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Bonnie Green</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
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