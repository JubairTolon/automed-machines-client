import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { BiMinusCircle } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const SingleCartItem = ({ product, counter, incrementCounter, decrementCounter, total }) => {

    return (
        <tr class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td>
                <img className='mx-auto' width='40%' src={product.pictures[0].img1} alt="" />
            </td>
            <th class="font-md text-gray-700 whitespace-nowrap dark:text-white">
                {product.name}
            </th>
            <td class="">
                $ {product.price}
            </td>
            <td class="">
                <div className='flex gap-2 items-center border border-gray-400 rounded-md py-1 w-1/2 mx-auto'>
                    <IconButton onClick={decrementCounter} aria-label="delete">
                        <BiMinusCircle />
                    </IconButton>
                    <p className='text-lg text-gray-600'>{counter}</p>
                    <IconButton onClick={incrementCounter} aria-label="delete">
                        <BsPlusCircle />
                    </IconButton>
                </div>
            </td>
            <td class="">
                $ {counter * product.price}
            </td>
            <td class="">
                <IconButton aria-label="delete">
                    <span className='hover:text-red-500'><MdDelete /></span>
                </IconButton>
            </td>
        </tr>
    );
};

export default SingleCartItem;