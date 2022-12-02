import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from './Loading';

const Profile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const imgStorageKey = 'a0fa63c8363513eddd0ee77fe8fc6523';
    const { register, handleSubmit, reset } = useForm();

    const { data: currentUser, isLoading, refetch } = useQuery(['user', user], () =>
        fetch(`https://automed-machines-server.vercel.app/profileInfo?user=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = async (data) => {
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const person = {
                        img: img
                    }

                    // send to my database
                    fetch(`https://automed-machines-server.vercel.app/updateProfile/${email}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(person)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('profile update successfully');
                                reset();
                                refetch();
                            }
                            else {
                                toast.error('profile update failed');
                                reset();
                            }
                        })
                }
            })
    };

    return (
        <div className=' bg-zinc-200 rounded-md mt-48 lg:mt-36 w-2/3 px-16 py-6 mx-auto mb-6'>
            <div className='w-full mb-10'>
                {
                    currentUser[0]?.img ? <img className="w-60 h-60 rounded-full" src={currentUser[0]?.img} alt="profile" />
                        :
                        <div className="overflow-hidden flex justify-center items-center w-60 h-60 bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-48 h-48 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>

                }
                <h1 className='text-5xl text-purple-500 font-semibold'>{user?.displayName}</h1>
            </div>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 w-full block lg:flex justify-between">
                    <div>
                        <input
                            {...register("picture")}
                            type="file"
                            className="text-sm w-1/2 lg:w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">This picture will show as you profile photo.</div>
                    </div>
                    <input className='btn btn-primary mt-5 lg:mt-0 w-1/2 lg:w-1/6' type="submit" value="Update Profile" />
                </div>
            </form>
        </div>
    );
};

export default Profile;