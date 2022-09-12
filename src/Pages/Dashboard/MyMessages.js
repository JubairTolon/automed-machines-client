import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import logo from '../../Assets/logo.png'

const MyMessages = () => {
    const [user] = useAuthState(auth)
    const { data: messages, isLoading, refetch } = useQuery('message', () =>
        fetch(`http://localhost:5000/userMessage?user=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
    )
    refetch();
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-row gap-2'>
            {messages?.length > 0 ?
                messages?.map(message => <figure
                    key={message._id}
                    className="flex flex-col justify-center items-center p-3 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src={logo} alt="profile" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Automed Mechines</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">automed.machines@uk.com</div>
                        </div>
                    </figcaption>
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-2 dark:text-gray-400">
                        <p className="my-4 font-light">{message?.message}</p>
                    </blockquote>
                    <button className='btn btn-error btn-xs rounded-sm py-1 text-white'>delete</button>
                </figure>) :
                <div className='flex justify-center items-center'>
                    <h1 className='text-3xl'>You have no message</h1>
                </div>
            }

        </div>
    );
};

export default MyMessages;