import { IconButton, Rating } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiMinusCircle } from 'react-icons/bi';
import { BsPlusCircle, BsSuitHeart } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { AddItemContext } from '../../App';
import Product from '../Home/Product';
import './singleProduct.css'


const SingleProductDeails = ({ products }) => {
    const { productId } = useParams();
    const handleAddToCartButton = useContext(AddItemContext);

    //for single product information
    const product = products?.filter(product => product._id === parseInt(productId));


    //for multiple image change
    const images = Object.values(product[0].pictures);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // //for product + -
    // const [counter, setCounter] = useState(product[0].minOrder);
    // const incrementCounter = () => {
    //     if (counter >= product[0]?.avaiableQuentty) {
    //         setCounter(product[0]?.avaiableQuentty);
    //     }
    //     else {
    //         setCounter(counter + 1)
    //     }
    // };
    // const decrementCounter = () => {
    //     if (counter <= product[0]?.minOrder) {
    //         setCounter(product[0]?.minOrder);
    //     }
    //     else {
    //         setCounter(counter - 1)
    //     }
    // }

    // for description and review state change
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
    };
    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    };

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
                    <h1 className='text-3xl font-semibold'>{product[0]?.name}</h1>
                    <div className='flex items-center my-4'><Rating className='mr-2' name="half-rating" value={product[0].rating} precision={0.5} readOnly /> 2 Rating <span>(S)</span></div>
                    <div class="flex gap-4 items-center my-4">
                        <span class="text-xl font-bold text-gray-900 dark:text-white">$ {product[0]?.price}</span>
                        {
                            product[0]?.offer &&
                            <span className='bg-red-600 px-2 rounded text-white font-semibold'>{product[0].offer} %</span>
                        }
                        {
                            product[0]?.offer &&
                            <p className='line-through'>$ {product[0]?.price * (parseInt(product[0]?.offer) / 100)}</p>
                        }
                    </div>
                    <p className='text-lg'>{product[0]?.description}</p>
                    <div className='flex gap-8 my-6 items-center'>
                        <div className='flex gap-2 items-center border border-gray-400 rounded-md py-1'>
                            <IconButton aria-label="delete">
                                <BiMinusCircle />
                            </IconButton>
                            <p className='text-lg text-gray-600'>{product[0].minOrder}</p>
                            <IconButton aria-label="delete">
                                <BsPlusCircle />
                            </IconButton>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCartButton(product[0])} className='btn btn-goust border-0 bg-orange-500'>Add to cart</button>
                        </div>
                        <div className='flex jestify-center hover:text-base-200'>
                            <button className='btn btn-outline rounded border-gray-400 '><BsSuitHeart /></button>
                        </div>
                    </div>
                    <p className='text-md font-semibold text-gray-700'>Minimur order: <span className='font-normal'>{product[0]?.minOrder}</span></p>
                    <p className='text-md font-semibold text-gray-700 my-2'>Available quentity: <span className='font-normal'>{product[0]?.avaiableQuentty}</span></p>
                    <p className='text-md font-semibold text-gray-700'>Color: <span className='font-normal'>{product[0]?.color}</span></p>
                    <p className='text-md font-semibold text-gray-700 my-2'>Category: <span className='font-normal'>{product[0]?.category}</span></p>
                    <p className='text-md font-semibold text-gray-700'>Tag: <span className='font-normal'>{product[0]?.tag}</span></p>
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
                        <button className={reviews ? 'text-gray-600 text-3xl font-semibold mr-6' : 'text-3xl text-gray-400 font-semibold mr-6'} onClick={reviewsHandler}>Reviews {2}</button>
                    </div>
                    {description && (
                        <p className='text-md text-gray-700 pl-2 pr-10'>{product[0].description}</p>
                    )}
                    {reviews && (
                        <div>
                            <div className='w-2/3'>
                                <figure class="flex flex-col justify-center items-center p-8 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                                    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                                        <Rating name="half-rating" value={product[0].rating} precision={0.5} readOnly />
                                        <p class="my-4 font-light">{product[0].review}</p>
                                    </blockquote>
                                    <figcaption class="flex justify-center items-center space-x-3">
                                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                                            <div>Bonnie Green</div>
                                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )}
                </div>
                <div className='mt-6 lg:mt-0'>
                    <h1 className='text-3xl font-semibold text-gray-600 mb-6'>Please give a review for {product[0].name}</h1>
                    <Rating size='large' name="half-rating" defaultValue={1} Value='{}' precision={0.5} />
                    {

                    }
                    <form>
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="enter the review title" />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title of review</label>
                        </div>
                        <div className='relative z-0 mb-6 w-full group'>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required="enter your review"></textarea>
                        </div>
                        <button type="submit" class="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <div className='w-2/3 mx-auto my-12 bg-zinc-100 p-10 rounded'>
                <h1 className='text-3xl text-gray-600 mb-10 font-semibold'>Releted Product</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        products?.map(product => {
                            if (product._id <= 6) {
                                return <Product
                                    key={product._id}
                                    product={product}
                                ></Product>
                            }
                            return true
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default SingleProductDeails;