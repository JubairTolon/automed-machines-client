import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from '../Shared/DeleteConfirmModal';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const api = 'http://localhost:5000/user';

    const { data: users, isLoading, refetch } = useQuery('user', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='my-2 text-xl font-semibold text-purple-500'>Total Orders: {users?.length}</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                user Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                User
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Joined
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow
                                user={user}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                refetch={refetch}
                deletingProduct={deletingProduct}
                setDeletingProduct={setDeletingProduct}
                api={api}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default Users;