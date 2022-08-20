import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsCartPlus, BsSuitHeart } from 'react-icons/bs';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { Rating } from '@mui/material';
import './Product.css'

const Product = ({ product, handleAddToCartButton }) => {
    const { _id, category, color, name, brand, pictures, status, description, minOrder, price, avaiableQuentty, rating, offer } = product;
    const navigate = useNavigate();

    const navigateToDetailsPage = id => {
        navigate(`/productDetails/${id}`)
    }
    return (
        <div className="product-container z-0  bg-white rounded-lg shadow-md text-gray-500 dark:bg-gray-800 dark:border-gray-700 relative">
            <div onClick={() => navigateToDetailsPage(_id)}>
                {
                    status &&
                    <span className='bg-red-600 px-3 py-1 rounded text-white text-xs font-semibold absolute top-4 left-4'>{status}</span>
                }
                <Link to='/productDetails' className='flex justify-center h-32 mb-12'>
                    <img class="px-4 rounded-t-lg pt-1" width='60%' alt='' src={pictures.img1} />
                </Link>
                <div class="px-4 pb-3 absolute bottom-0">
                    <Link to='/productDetails'>
                        <h5 class="text-lg font-semibold tracking-tight text-gray-700 dark:text-white">{name} {color}</h5>
                        <p>Available Quantity: {avaiableQuentty}</p>
                        <p>Minimum Order: {minOrder}</p>
                    </Link>
                    <Rating name="read-only" value={rating} readOnly />
                    <div class="flex gap-4 items-center">
                        <span class="text-xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                        {
                            offer &&
                            <span className='bg-red-600 px-2 rounded text-white font-semibold'>{offer} %</span>
                        }
                        {
                            offer &&
                            <p className='line-through'>$ {price * (parseInt(offer) / 100)}</p>
                        }
                    </div>
                </div>
            </div>
            <div className='buttons absolute top-40 left-4 z-20'>
                <button type="button" class="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span class=""><MdOutlineCompareArrows /></span>
                </button>
                <button type="button" class="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span class=""><BsSuitHeart /></span>
                </button>
                <button onClick={() => handleAddToCartButton(product)} type="button" class="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span class=""><BsCartPlus /></span>
                </button>
            </div>
        </div>

    );
};

export default Product;