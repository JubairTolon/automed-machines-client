import { IconButton } from '@mui/material';
import React from 'react';
import { MdDelete, MdOutlinePreview } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleOrderRow = ({ order, setDeletingProduct, refetch }) => {
    const navigate = useNavigate();

    const navigateToSingleOrder = (id) => {
        navigate(`singleAdminOrder/${id}`)
    }

    const handleShip = (id) => {
        if (!order.paid) {
            toast.error('Orderis not paid');
        }
        else {
            fetch(`http://localhost:5000/orderShip/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }
    return (
        < tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {order._id}
            </th>
            <td className="py-4 px-6">
                {order.date}
            </td>
            <td className="py-4 px-6">
                {order.user}
            </td>
            <td className="py-4 px-6">
                {order.cart?.length}
            </td>
            <td className="py-4 px-6">
                {order.quantity}
            </td>
            <td className="py-4 px-6">
                {`$ ${order.total}`}
            </td>
            <td className="py-4 px-6">
                {order.paid &&
                    <div>
                        <div className='rounded-sm px-1 bg-green-400 py-1 text-center font-semibold text-xs text-white uppercase'>Paid</div>
                    </div>
                }
                {!order.paid &&
                    <div>
                        <div className='rounded-sm px-1 bg-red-400 py-1 text-center font-semibold text-xs text-white uppercase'>Not paid</div>
                    </div>
                }
            </td>
            <td className="py-4 px-6">
                {(!order.shipped) &&
                    <button onClick={() => handleShip(order._id)} className='btn btn-xs rounded-sm btn-info text-white'>Ship</button>}
                {order.shipped &&
                    <div>
                        <button disabled className='btn btn-xs rounded-sm btn-info'>Shipped</button>
                    </div>
                }
            </td>
            <td className="py-4 px-6">
                <label className='w-2/3 hover:bg-gray-200 text-gray-500 rounded-3xl flex justify-center items-center hover:cursor-pointer hover:text-red-500 py-1' onClick={() => setDeletingProduct(order)} htmlFor="delete-confirm-modal">
                    <span className='text-2xl'><MdDelete /></span>
                </label>
            </td>
            <td className="py-4 px-6">
                <IconButton onClick={() => navigateToSingleOrder(order._id)} aria-label="delete">
                    <MdOutlinePreview />
                </IconButton>
            </td>
        </tr >
    );
};

export default SingleOrderRow;