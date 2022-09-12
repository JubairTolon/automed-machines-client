import { IconButton, Rating } from '@mui/material';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiMinusCircle } from 'react-icons/bi';
import { BsPlusCircle, BsSuitHeart } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddItemContext } from '../../App';
import auth from '../../firebase.init';
import useLoadReviews from '../../Hooks/useLoadReviews';
import Product from '../Home/Product';
import Loading from '../Shared/Loading';
import './singleProduct.css'


const SingleProductDeails = ({ products }) => {
    //for load all product reviews
    const { reviews, isLoading, refetch } = useLoadReviews();

    const [user] = useAuthState(auth);
    const date = new Date();
    const formatedDate = format(date, 'PP');
    const handleAddToCartButton = useContext(AddItemContext);
    const { pId } = useParams();


    //for single product information
    const product = products?.find(product => product._id === pId);
    //filter reviews for usePerams Id
    const pReviews = reviews?.filter(review => review.productId === pId);

    //count rating
    let totalRating = 0;
    pReviews?.map(pr => totalRating = totalRating + pr.rating);
    const rating = Math.round(totalRating / pReviews?.length);

    //releted product
    const reletedProduct = products.filter(p => p.tag === product.tag);

    //for multiple image change
    const images = Object.values(product?.pictures);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // for description and review state change
    const [description, setDescription] = useState(true);
    const [showReviews, setShowReviews] = useState(false);
    const [takeRating, setTakeRating] = React.useState(null);

    const descriptionHandler = () => {
        setDescription(true);
        setShowReviews(false);
    };
    const reviewsHandler = () => {
        setDescription(false);
        setShowReviews(true);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleReview = (event) => {
        event.preventDefault();
        const review = {
            date: formatedDate,
            user: user.email,
            userImg: user.photoURL,
            photo: user.photoURL,
            productId: product._id,
            available: product.avaiableQuentty,
            productImg: product.pictures?.img1,
            rating: takeRating,
            title: event.target.title.value,
            review: event.target.review.value
        }
        fetch('http://localhost:5000/productReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                }
                toast(`your review for ${product.name} successfully'`);
                refetch();
            })
    }



    //for releted product
    return (
        <div className='mt-52 lg:mt-32'>
            <div className='w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-40'>
                <div className='flex flex-col items-center relative'>
                    <div className='single-product-image-container mb-28 lg:mb-0'>
                        <img className='single-product-image' src={selectedImage} alt="" />
                    </div>
                    <div className='single-product-image-more bg-zinc-100 absolute bottom-0'>
                        {
                            images.map((image, index) => {
                                return <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    onClick={() => setSelectedImage(image)} />
                            })
                        }
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-3xl font-semibold'>{product.name}</h1>
                    <div className='flex items-center my-4'><Rating className='mr-2' name="half-rating" value={rating} precision={0.5} readOnly /> {pReviews?.length} Rating <span>(S)</span></div>
                    <div className="flex gap-4 items-center my-4">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">$ {product.price}</span>
                        {
                            product?.offer &&
                            <span className='bg-red-600 px-2 rounded text-white font-semibold'>{product.offer} %</span>
                        }
                        {
                            product?.offer &&
                            <p className='line-through'>$ {product?.price * (parseInt(product?.offer) / 100)}</p>
                        }
                    </div>
                    <p className='text-lg'>{product?.description}</p>
                    <div className='flex gap-8 my-6 items-center'>
                        <div className='flex gap-2 items-center border border-gray-400 rounded-md py-1'>
                            <IconButton aria-label="delete">
                                <BiMinusCircle />
                            </IconButton>
                            <p className='text-lg text-gray-600'>{product.minOrder}</p>
                            <IconButton aria-label="delete">
                                <BsPlusCircle />
                            </IconButton>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCartButton(product)} className='btn btn-goust border-0 bg-orange-500'>Add to cart</button>
                        </div>
                        <div className='flex jestify-center hover:text-base-200'>
                            <button className='btn btn-outline rounded border-gray-400 '><BsSuitHeart /></button>
                        </div>
                    </div>
                    <p className='text-md font-semibold text-gray-700'>Minimur order: <span className='font-normal'>{product?.minOrder}</span></p>
                    <p className='text-md font-semibold text-gray-700 my-2'>Available quentity: <span className='font-normal'>{product?.avaiableQuentty}</span></p>
                    <p className='text-md font-semibold text-gray-700'>Color: <span className='font-normal'>{product?.color}</span></p>
                    <p className='text-md font-semibold text-gray-700 my-2'>Category: <span className='font-normal'>{product?.category}</span></p>
                    <p className='text-md font-semibold text-gray-700'>Tag: <span className='font-normal'>{product?.tag}</span></p>
                    <div className='grid grid-cols-6 w-1/3 items-center mt-2'>
                        <p className='text-gray-600 font-semibold'>Share: </p>
                        <span className='text-2xl text-gray-500 hover:cursor-pointer hover:text-orange-500 ml-4'><FaFacebookF /></span>
                        <span className='text-2xl text-gray-500 hover:cursor-pointer hover:text-orange-500 ml-4'><AiFillInstagram /></span>
                        <span className='text-2xl text-gray-500 hover:cursor-pointer hover:text-orange-500 ml-4'><AiOutlineTwitter /></span>
                        <span className='text-2xl text-gray-500 hover:cursor-pointer hover:text-orange-500 ml-4'><FaPinterestP /></span>
                        <span className='text-2xl text-gray-500 hover:cursor-pointer hover:text-orange-500 ml-4'><MdEmail /></span>
                    </div>

                </div>
            </div>
            <div className='w-2/3 grid grid-cols-1 lg:grid-cols-2 mx-auto mt-16'>
                <div>
                    <div className='mb-8 pl-2'>
                        <button className={description ? 'text-gray-600 text-3xl font-semibold mr-16' : 'text-3xl text-gray-400 font-semibold mr-16'} onClick={descriptionHandler}>Descriptions</button>
                        <button className={showReviews ? 'text-gray-600 text-3xl font-semibold mr-6' : 'text-3xl text-gray-400 font-semibold mr-6'} onClick={reviewsHandler}>Reviews {pReviews?.length}</button>
                    </div>
                    {description && (
                        <p className='text-md text-gray-700 pl-2 pr-10'>{product.description}</p>
                    )}
                    {showReviews && (
                        <div>
                            <div className='w-2/3 grid  gap-2'>
                                {
                                    pReviews.map(pr => <figure className="flex flex-col justify-center items-center p-1 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                                        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                            <p className="my-4 font-light">{pr.review}</p>
                                        </blockquote>
                                        <figcaption className="flex justify-center items-center space-x-3">
                                            {pr.userImg ?
                                                <img className="w-9 h-9 rounded-full" src={pr.userImg} alt="profile" />
                                                :
                                                <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                                </div>
                                            }
                                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                                <div>{pr.user}</div>
                                                <Rating name="half-rating" value={pr.rating} precision={0.5} readOnly />
                                            </div>
                                        </figcaption>
                                    </figure>)
                                }
                            </div>
                        </div>
                    )}
                </div>
                <div className='mt-6 lg:mt-0'>
                    <h1 className='text-3xl font-semibold text-gray-600 mb-6'>Please give a review for {product.name}</h1>
                    <Rating
                        size='large'
                        precision={0.5}
                        name="simple-controlled"
                        value={takeRating}
                        onChange={(event, newValue) => {
                            setTakeRating(newValue);
                        }}
                    />
                    <form onSubmit={handleReview}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='title of review' required />

                        </div>
                        <div className='relative z-0 mb-6 w-full group'>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your message</label>
                            <textarea name='review' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required="enter your review"></textarea>
                        </div>
                        <button type="submit" className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <div className='w-2/3 mx-auto my-12 bg-zinc-100 p-10 rounded'>
                <h1 className='text-3xl text-gray-600 mb-10 font-semibold'>Releted Product</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        reletedProduct?.map(p => <Product key={p._id} product={p}></Product>)
                    }
                </div>
            </div>
        </div >
    );
};

export default SingleProductDeails;