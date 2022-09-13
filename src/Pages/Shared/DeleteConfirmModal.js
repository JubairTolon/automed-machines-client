import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct, refetch, api }) => {
    const { name, _id } = deletingProduct;

    const handleDelete = id => {
        fetch(`${api}/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success(`Item: ${name || _id} is deleted `)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete <span className='text-gray-600'>{_id}</span> </h3>
                    <p class="py-4">If you deleted this data, you wll not get it return !</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='hover:text-red-500 btn btn-sm' aria-label="delete">Delete</button>

                        <label for="delete-confirm-modal" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;