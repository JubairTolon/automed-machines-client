import { IconButton } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { RemoveItemContext } from '../../App';

const NavCartSingleItem = ({ item }) => {
    const handleRemoveCartItem = useContext(RemoveItemContext)
    const quantity = item?.minOrder + item?.quantity
    return (
        <div className='flex gap-2 items-center text-center px-2 my-0.5  bg-base-100 rounded py-2 h-20 justify-between'>
            <div className='rounded w-24 '><img className='rounded-lg p-4' src={item?.pictures.img1} alt="" /></div>
            <div className='w-60'>
                <h2>{item?.name}</h2>
                <p className='font-bold'>{item.price} x {quantity}</p>
            </div>
            <div className='w-12'>
                <IconButton onClick={() => handleRemoveCartItem(item)} aria-label="delete">
                    <span className='hover:text-red-500'><MdDelete /></span>
                </IconButton></div>
        </div>
    );
};

export default NavCartSingleItem;