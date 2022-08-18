import React, { useEffect, useState } from 'react';
import { Bounce, Flip } from 'react-reveal';
import Review from './Review';
import logo from '../../Assets/logo.png'

const ReviewsMain = () => {
    const [reviews, setReviews] = useState([]);
    const url = 'Reviews.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews]);
    return (
        <div className='lg:flex flex-col lg:flex-row mx-auto bg-zinc-100 px-4 mt-48 lg:mt-32 items-center lg:items-start'>
            <div className='flex flex-col w-full lg:w-1/3 items-center mt-24'>
                <Bounce>
                    <h1 className='text-5xl'><span className='font-bold'>Here,</span><br />the <br /><span className='font-bold'>Magical</span> box <br />with<br /> <span className='font-bold'>Magical</span> words<br />of<br />our <span className='font-bold'>Successes</span></h1>
                </Bounce>
            </div>
            <Flip left>
                <div className='w-full lg:w-2/3  grid grid-flow-row justify-between grid-cols-2 lg:grid-cols-4 gap-2 py-6'>
                    {
                        reviews?.map(review =>
                            <Review
                                key={review._id}
                                review={review}
                            ></Review>
                        )
                    }
                </div>
            </Flip>
        </div >
    );
};

export default ReviewsMain;