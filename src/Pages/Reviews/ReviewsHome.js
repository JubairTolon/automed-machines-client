import React, { useEffect, useState } from 'react';
import { Flip } from 'react-reveal';
import { Link } from 'react-router-dom';
import Review from './Review';

const ReviewsHome = () => {
    const [reviews, setReviews] = useState([]);
    const url = 'Reviews.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews]);


    return (
        <div className='flex flex-col items-center w-full mx-auto bg-zinc-100 px-8'>
            <Flip left>
                <h1 className='text-5xl font-semibold my-12 text-gray-700'>Our Happy Client</h1>
            </Flip>
            <div className='grid grid-flow-col justify-between grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-6'>
                {
                    reviews?.map(review => {
                        if (review._id <= 6) {
                            return <Review
                                key={review._id}
                                review={review}
                            ></Review>
                        }
                    })
                }
            </div>
            <div>
                <Link to='/reviewsMain'>
                    <button className='btn text-white bg-orange-500 mt-9 border-none'>See all reviews</button>
                </Link>
            </div>
        </div >
    );
};

export default ReviewsHome;