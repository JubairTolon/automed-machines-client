import { IconButton } from '@mui/material';
import { BiMinusCircle } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import './Item.css'

const SingleCartItem = ({ product, handleRemoveCartItem }) => {
    const quantity = product.minOrder + product.quantity;

    return (
        <tr class="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td>
                <img className='mx-auto' width='40%' src={product.pictures.img1} alt="" />
            </td>
            <th class="font-md text-gray-700 whitespace-nowrap dark:text-white">
                {product?.name}
            </th>
            <td class="">
                $ {product?.price}
            </td>
            <td class="">
                <div className='flex gap-2 items-center justify-center w-2/4 rounded-md py-1 mx-auto'>
                    <IconButton aria-label="delete">
                        <span className='hover:text-red-500'><BiMinusCircle /></span>
                    </IconButton>
                    <input className='border rounded text-center w-20' value={quantity} type="text" />
                    <IconButton aria-label="delete">
                        <span className='hover:text-red-500'><BsPlusCircle /></span>
                    </IconButton>
                </div>
            </td>
            <td class="">
                $ {quantity * product?.price}
            </td>
            <td class="">
                <IconButton onClick={() => handleRemoveCartItem(product)} aria-label="delete">
                    <span className='hover:text-red-500'><MdDelete /></span>
                </IconButton>
            </td>
        </tr>
    );
};

export default SingleCartItem;