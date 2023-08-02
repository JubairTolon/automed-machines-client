import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLoadProduct from '../../Hooks/useLoadProduct';

const UpdateProduct = () => {
    const imgStorageKey = 'a0fa63c8363513eddd0ee77fe8fc6523';
    const { register, handleSubmit, reset } = useForm();
    const { pId } = useParams();
    const { products, refetch } = useLoadProduct();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const product = products?.find(p => p._id === pId);
        setProduct(product);
    }, [pId, products]);


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
                    const product = {
                        name: data.name,
                        img: img,
                    }

                    //send to my database
                    fetch(`https://automed-machines-server.vercel.app/updateProduct/${pId}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('A new product iupdate successfully');
                                reset();
                                refetch();
                            }
                            else {
                                toast.error('A product update failed');
                                reset();
                            }
                        })
                }
            })
    };

    return (
        <div>
            <div className='lg:flex block'>
                <div className='w-1/3'>
                    <img src={product?.pictures?.img1} alt="" />
                </div>
                <div className='w-full py-5 bg-zinc-200 rounded-md'>
                    <form className='w-5/6 mt-6 ml-6' onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <input
                                type="text"
                                {...register("name")}
                                className="block p-2 lg:w-full w-2/3 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='product name' required />
                        </div>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <input
                                    {...register("picture")}
                                    type="file"
                                    className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" />
                                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">This picture will show as product photo.</div>
                            </div>
                            <input className='btn btn-primary lg:w-2/6 w-2/6' type="submit" value="Update product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;