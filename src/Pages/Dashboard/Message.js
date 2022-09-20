import { IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { BsReplyFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import DeleteConfirmModal from '../Shared/DeleteConfirmModal';
import Loading from '../Shared/Loading';

const Message = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const api = 'http://localhost:5000/message';

    const { data: messages, isLoading, refetch } = useQuery('message', () =>
        fetch('http://localhost:5000/message', {
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
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-5 gap-2'>
            {
                messages?.map(message => <figure
                    key={message._id}
                    setDeletingProduct={setDeletingProduct}

                    className="flex flex-col justify-center items-center bg-zinc-100 p-3 text-center border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <p className="my-4 font-light">{message.message}</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        {
                            (message.photo || message.gPhoto) ? <img className="w-9 h-9 rounded-full" src={message.photo} alt="profile" />
                                :
                                <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>

                        }
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>{message.name}</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{message.user}</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{message.date}</div>
                        </div>
                    </figcaption>
                    <div className='flex gap-2 mt-2 '>
                        <button className=''>
                            <IconButton aria-label="delete">
                                <span className='hover:text-blue-500'><BsReplyFill MdDelete /></span>
                            </IconButton>
                        </button>
                        <label className=' hover:bg-gray-200 rounded-3xl flex items-center px-2 hover:cursor-pointer text-gray-500 hover:text-red-500' onClick={() => setDeletingProduct(message)} for="delete-confirm-modal">
                            <span className='text-2xl'><MdDelete /></span>
                        </label>
                    </div>
                </figure>)
            }
            {deletingProduct && <DeleteConfirmModal
                refetch={refetch}
                deletingProduct={deletingProduct}
                setDeletingProduct={setDeletingProduct}
                api={api}
            ></DeleteConfirmModal>}

        </div>
    );
};

export default Message;