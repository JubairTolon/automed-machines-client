import React, { useState } from 'react';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

    const handleAddProduct = event => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            category: event.target.category.value,
            color: event.target.color.value,
            brand: event.target.brand.value,
            avaiableQuentty: event.target.available.value,
            minOrder: event.target.minOrder.value,
            price: event.target.price.value,
            status: event.target.status.value,
            offer: event.target.offer.value,
            tag: event.target.tag.value,
            stock: event.target.stock.value,
            description: event.target.description.value,
            shipping: event.target.shipping.value,
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
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast('A new product is added successfully');
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleAddProduct} className='my-6 px-4 bg-zinc-200 py-6 rounded-lg'>
                <div class="mb-4">
                    <input name='name' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="product name" required />
                </div>

                <div class="mb-4 flex gap-2">
                    <select defaultValue="default" name='category' className='bg-gray-50 border border-gray-300 text-gray-600 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
                        <option value='default' disabled>select category</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra-Large</option>
                    </select>
                    <input name='color' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="color" required />
                </div>

                <div class="mb-4 flex gap-2">
                    <select defaultValue="default" name='brand' className='bg-gray-50 border border-gray-300 text-gray-600 text-sm block w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
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
                    <input name='available' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="available quantity" required />
                </div>

                <div class="mb-4 flex gap-2">
                    <input name='minOrder' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="min order quantity" required />
                    <input name='price' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="price" required />
                </div>

                <div class="mb-4 flex gap-2">
                    <select defaultValue="default" name='status' className='bg-gray-50 border border-gray-300 text-gray-600 text-sm block w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
                        <option value='default' disabled>select status</option>
                        <option>Hot</option>
                        <option>New</option>
                    </select>
                    <input name='offer' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="offer" required />
                </div>

                <div class="mb-4 flex gap-2">
                    <select defaultValue="default" name='tag' className='bg-gray-50 border border-gray-300 text-gray-600 text-sm block w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
                        <option value='default' disabled>select tag</option>
                        <option>Bus</option>
                        <option>Car</option>
                        <option>Pickup</option>
                        <option>Truck</option>
                    </select>
                    <select defaultValue="default" name='stock' className='bg-gray-50 border border-gray-300 text-gray-600 text-sm block w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:text-white'>
                        <option value='default' disabled>select stock status</option>
                        <option>available</option>
                    </select>
                    <input name='shipping' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-1/2 p-2.5 dark:bg-gray-700 rounded-md dark:placeholder-gray-400 dark:text-white" placeholder="shipping cost" required />
                </div>
                <div class="mb-4 flex gap-2">
                    <textarea name='description' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="produc description..." required></textarea>
                </div>
                <div class="mb-4 flex justify-between">
                    <div className=''>
                        <input onChange={onImageChange} name='picture' class="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file" accept="image/*" />
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">This picture will show as product photo.</div>
                    </div>
                    <input className='btn btn-primary w-1/6' type="submit" value="Add product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;