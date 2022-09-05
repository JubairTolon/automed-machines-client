import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Message = () => {
    const { data: messages, isLoading } = useQuery('message', () =>
        fetch('http://localhost:5000/message')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-row gap-2'>
            {
                messages?.map(message => <figure
                    key={message._id}
                    className="flex flex-col justify-center items-center p-3 text-center bg-white border-2 rounded dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <p className="my-4 font-light">{message?.message}</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src={message?.photo} alt="profile" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>{message?.name}</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{message?.user}</div>
                        </div>
                    </figcaption>
                    <div className='flex gap-2 mt-2 '>
                        <button className='btn btn-success btn-xs rounded-sm py-1 text-white'>reply</button>
                        <button className='btn btn-error btn-xs rounded-sm py-1 text-white'>delete</button>
                    </div>
                </figure>)
            }

        </div>
    );
};

export default Message;