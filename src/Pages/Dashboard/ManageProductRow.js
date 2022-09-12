import { IconButton } from '@mui/material';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const ManageProductRow = ({ product, setDeletingProduct }) => {
    const { _id, name, pictures, stock, color, avaiableQuentty, price } = product;
    return (
        <tr
            key={_id}
            className="bg-white border-b h-11 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="py-2 px-2">
                {_id}
            </th>
            <th className="py-2 px-2">
                <img className='w-16' width='25%' src={pictures.img1} alt="" />
            </th>
            <td className="py-2 px-2">
                {name}
            </td>
            <td className="py-2 px-2">
                {stock}
            </td>
            <td className="py-2 px-2">
                {color}
            </td>
            <td className="py-2 px-2">
                {avaiableQuentty}
            </td>
            <td className="py-2 px-2">
                {`$ ${price}`}
            </td>
            <td className="py-2 px-2">
                <div className='flex gap-2'>
                    <IconButton aria-label="delete">
                        <AiFillEdit />
                    </IconButton>

                    <label className=' hover:bg-gray-200 text-gray-500 rounded-3xl flex items-center px-2 hover:cursor-pointer hover:text-red-500' onClick={() => setDeletingProduct(product)} for="delete-confirm-modal">
                        <span className='text-2xl'><MdDelete /></span>
                    </label>
                </div>
            </td>
        </tr>
    );
};

export default ManageProductRow;