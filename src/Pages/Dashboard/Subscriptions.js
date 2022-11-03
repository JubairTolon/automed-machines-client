import { IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { BsGift } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import DeleteConfirmModal from '../Shared/DeleteConfirmModal';
import Loading from '../Shared/Loading';

const Subscriptions = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const api = 'https://gentle-peak-82604.herokuapp.com/subscription';

    const { data: subscribers, isLoading, refetch } = useQuery('subscriber', () =>
        fetch('https://gentle-peak-82604.herokuapp.com/subscription', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        < div className="overflow-x-auto relative shadow-md sm:rounded-lg" >
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Subscription Id
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            User
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subscribers?.map(subscriber =>
                            <tr
                                key={subscriber._id}
                                setDeletingProduct={setDeletingProduct}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {subscriber._id}
                                </th>
                                <td className="py-4 px-6">
                                    {subscriber.date}
                                </td>
                                <td className="py-4 px-6">
                                    {subscriber.user}
                                </td>
                                <td className="py-4 px-6 flex gap-2">
                                    <IconButton aria-label="delete">
                                        <span className='text-purple-500'><BsGift /></span>
                                    </IconButton>
                                    <label className=' hover:bg-gray-200 rounded-3xl flex items-center px-2 hover:cursor-pointer text-gray-500 hover:text-red-500' onClick={() => setDeletingProduct(subscriber)} htmlFor="delete-confirm-modal">
                                        <span className='text-2xl'><MdDelete /></span>
                                    </label>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            {deletingProduct && <DeleteConfirmModal
                refetch={refetch}
                deletingProduct={deletingProduct}
                setDeletingProduct={setDeletingProduct}
                api={api}
            ></DeleteConfirmModal>}
        </div >
    );
};

export default Subscriptions;