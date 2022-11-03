import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = ({ refetch }) => {
    const { register, handleSubmit, reset } = useForm();

    const imgStorageKey = 'a0fa63c8363513eddd0ee77fe8fc6523';

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
                        category: data.category,
                        color: data.color,
                        brand: data.brand,
                        avaiableQuentty: data.avaiableQuentty,
                        minOrder: data.minOrder,
                        price: data.price,
                        status: data.status,
                        offer: data.offer,
                        tag: data.tag,
                        stock: data.stock,
                        shipping: data.shipping,
                        description: data.description,
                        pictures: {
                            img1: img,
                            img2: "",
                            img3: "",
                            img4: "",
                        },
                        quantity: 0,
                        rating: 0,
                        review: "",
                    }
                    //send to my database
                    fetch('https://gentle-peak-82604.herokuapp.com/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('A new product is added successfully');
                                refetch();
                                reset();
                            }
                            else {
                                toast.error('A product added failed');
                                reset();
                            }
                        })
                }
            })
    };

    return (
        <div className='lg:mt-0 mt-16'>
            <form className='my-6 px-4 bg-zinc-200 py-6 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <input
                        type="text"
                        {...register("name")}
                        className="block p-2 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='product name' required />
                </div>
                <div className="mb-4 flex gap-2">
                    <select defaultValue="default"
                        {...register("category")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                        <option value='default' disabled>select category</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra-Large</option>
                    </select>
                    <select defaultValue="default"
                        {...register("color")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
                        <option value='default' disabled>select color</option>
                        <option>Red</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Silver</option>
                        <option>Yellow</option>
                        <option>Mercury Black</option>
                    </select>
                </div>
                <div className="mb-4 flex gap-2">
                    <select defaultValue="default"
                        {...register("brand")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                        <option value='default' disabled>select brand</option>
                        <option>Acura</option>
                        <option>Alfa Romeo</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Bugati</option>
                        <option>Buick</option>
                        <option>Bentley</option>
                        <option>Chevrolet</option>
                        <option>Cadillac</option>
                        <option>Ford</option>
                        <option>Honda</option>
                        <option>Lemborgeni</option>
                        <option>Toyota</option>
                    </select>
                    <input
                        type="number"
                        {...register("avaiableQuentty")}
                        className="block p-2 w-1/2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='available quantity' required />
                </div>
                <div className="mb-4 flex gap-2">
                    <input
                        type="number"
                        {...register("minOrder")}
                        className="block p-2 w-1/2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='miminum order' required />
                    <input
                        type="number"
                        {...register("price")}
                        className="block p-2 w-1/2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='price' required />
                </div>
                <div className="mb-4 flex gap-2">
                    <select defaultValue="default"
                        {...register("status")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                        <option value='default' disabled>select status</option>
                        <option>Hot</option>
                        <option>New</option>
                    </select>
                    <input
                        type="number"
                        {...register("offer")}
                        className="block p-2 w-1/2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='offer' required />
                </div>

                <div className="mb-4 flex gap-2">
                    <select defaultValue="default"
                        {...register("tag")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                        <option value='default' disabled>select tag</option>
                        <option>Bus</option>
                        <option>Car</option>
                        <option>Pickup</option>
                        <option>Truck</option>
                    </select>
                    <select defaultValue="default"
                        {...register("stock")}
                        className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white' required>
                        <option value='default' disabled>select stock</option>
                        <option>available</option>
                        <option>out</option>
                    </select>
                    <input
                        type="number"
                        {...register("shipping")}
                        className="block p-2 w-1/2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 text-sm dark:bg-gray-700 dark:border-gray-600" placeholder='shipping cost' required />
                </div>
                <div className="mb-4 flex gap-2">
                    <textarea
                        {...register("description")}
                        name='description'
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="produc description..." required></textarea>
                </div>
                <div className="mb-4 flex justify-between">
                    <div>
                        <input
                            {...register("picture")}
                            type="file"
                            className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">This picture will show as product photo.</div>
                    </div>
                    <input className='btn btn-primary w-1/6' type="submit" value="Add product" />
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;