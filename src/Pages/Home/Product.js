import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCartPlus, BsSuitHeart } from 'react-icons/bs';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { Rating } from '@mui/material';
import './Product.css'
import { useContext } from 'react';
import { AddItemContext } from '../../App';

const Product = ({ product }) => {
    const { _id, category, color, name, brand, pictures, status, description, minOrder, price, avaiableQuentty, rating, offer, stock } = product;

    const navigate = useNavigate();
    const handleAddToCartButton = useContext(AddItemContext);

    const navigateToDetailsPage = (id) => {
        navigate(`/productDetails/${id}`)
    }
    return (
        <div className="product-container z-0  bg-white rounded-lg shadow-md text-gray-500 dark:bg-gray-800 dark:border-gray-700 relative">
            <div className='hover:cursor-pointer' onClick={() => navigateToDetailsPage(_id)}>
                {
                    status && stock === 'available' &&
                    <span className='bg-red-600 px-3 py-1 rounded text-white text-xs font-semibold absolute top-4 left-4'>{status}</span>
                }
                <div className='flex justify-center h-32 mb-12 w-full'>
                    <img className="px-4 rounded-t-lg pt-1" width='60%' alt='' src={pictures.img1} />
                </div>
                <div className="px-4 pb-3 absolute bottom-0 w-full">
                    <div>
                        <h5 className="text-lg font-semibold tracking-tight text-gray-700 dark:text-white">{name} {color}</h5>
                        <p>Available Quantity: {avaiableQuentty}</p>
                        <p>Minimum Order: {minOrder}</p>
                    </div>
                    <Rating name="read-only" value={rating} readOnly />
                    <div className="flex gap-4 items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                        {
                            offer && stock === 'available' ?
                                <span className='bg-red-600 px-2 rounded text-white font-semibold'>{offer} %</span>
                                : <div className='flex items-center bg-gray-200  btn-sm rounded-sm text-gray-800'>Stock out</div>
                        }
                        {
                            offer && stock === 'available' &&
                            <p className='line-through'>$ {price * (parseInt(offer) / 100)}</p>
                        }
                    </div>
                </div>
            </div>
            <div className='buttons absolute top-40 left-4 z-20'>
                <button type="button" className="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span className=""><MdOutlineCompareArrows /></span>
                </button>
                <button type="button" className="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span className=""><BsSuitHeart /></span>
                </button>
                <button onClick={() => handleAddToCartButton(product)} type="button" className="text-gray-400 border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white font-medium rounded text-xl p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white">
                    <span className=""><BsCartPlus /></span>
                </button>
            </div>
        </div >

    );
};

export default Product;