import { IconButton } from '@mui/material';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
const UserRow = ({ user, refetch, setDeletingProduct }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://gentle-peak-82604.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                    refetch();
                }
            })

    }
    return (
        <tr
            key={user._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user._id}
            </th>
            <td className="py-4 px-6">
                {user.email}
            </td>
            <td className="py-4 px-6">
                {user.date}
            </td>
            <td className="py-4 px-6 gap-2 flex">
                <label className=' hover:bg-gray-200 text-gray-500 rounded-3xl flex items-center px-2 hover:cursor-pointer hover:text-red-500' onClick={() => setDeletingProduct(user)} htmlFor="delete-confirm-modal">
                    <span className='text-2xl'><MdDelete /></span>
                </label>
                {role !== 'admin' ?
                    <button onClick={makeAdmin} className='btn btn-xs btn-info rounded-sm  text-white'>Make admin</button>
                    :
                    <IconButton disabled aria-label="delete">
                        <span className='hover:text-red-500'><RiAdminFill /></span>
                    </IconButton>
                }
            </td>
        </tr>
    );
}

export default UserRow;