import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { BiMinusCircle } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import SingleCartItem from './SingleCartItem';

const Cart = ({ cart }) => {
    console.log(cart)
    const products = [
        {
            "_id": 1,
            "category": "Small",
            "color": "Silver",
            "name": "SPARK PLUG",
            "brand": "Audi",
            "pictures": [
                {
                    "img1": "https://i.ibb.co/0GxqwS7/Automobile-Parts-Lfr5aix-11-4469-Iridium-IX-Auto-Car-Spark-Plugs.jpg",
                    "img2": "https://i.ibb.co/MZjt6nJ/1.jpg",
                    "img3": "https://i.ibb.co/jfT91NT/2.jpg",
                    "img4": "https://i.ibb.co/mRvg6P0/3.webp",
                    "img5": "https://i.ibb.co/12hstgx/4.jpg"
                }
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex molestias iure eaque vero expedita consequuntur accusamus, perferendis fugit, ut ratione blanditiis veritatis aut, temporibus esse doloremque dicta? Corporis odio fuga est veritatis dignissimos obcaecati? Iusto autem praesentium earum quasi ipsa pariatur laboriosam, temporibus quas incidunt? Sed labore repellendus necessitatibus dolore?",
            "minOrder": 50,
            "price": 800,
            "avaiableQuentty": 350,
            "rating": [
                {
                    "rating": 4.5,
                    "review": "Good packaging with good product Quality. Overall good product & color"
                }
            ],
            "status": "Hot",
            "offer": "30",
            "tag": "Car"
        }
    ]


    let total = 0;
    cart.map(product => {
        return total = total + product.price;
    })

    const [counter, setCounter] = useState(products[0].minOrder);
    const incrementCounter = () => {
        if (counter >= products[0]?.avaiableQuentty) {
            setCounter(products[0]?.avaiableQuentty);
        }
        else {
            setCounter(counter + 1)
        }
    };
    const decrementCounter = () => {
        if (counter <= products[0]?.minOrder) {
            setCounter(products[0]?.minOrder);
        }
        else {
            setCounter(counter - 1)
        }
    }
    const subTotal = (product) => {
        cart.map(paroduct => {

        })
    }
    //for total price count
    const countTotalPrice = (counter) => {

    }
    return (
        <div className='mt-32'>
            <p>cart length: {cart?.length}</p>
            <div class=" w-5/6 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 text-center uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3  w-1/12">
                                Image
                            </th>
                            <th scope="col" class="py-3  w-1/12">
                                Product name
                            </th>
                            <th scope="col" class="py-3  w-1/12">
                                Unit Price
                            </th>
                            <th scope="col" class="py-3  w-1/12">
                                Quantity
                            </th>
                            <th scope="col" class="py-3  w-1/12">
                                Total
                            </th>
                            <th scope="col" class="py-3  w-1/12">
                                Remove Item
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map(product => <SingleCartItem
                                key={product._id}
                                product={product}
                                counter={counter}
                                incrementCounter={incrementCounter}
                                total={total}
                                decrementCounter={decrementCounter}
                            ></SingleCartItem>)
                        }
                    </tbody>
                </table>
                <div className='flex justify-between mt-6 px-6'>
                    <div className='w-1/2'>
                        <div className=' flex gap-4'>
                            <Button sx={{ backgroundColor: '#424949', '&:hover': { backgroundColor: '#FF5733' } }} variant="contained">update cart</Button>
                            <Button sx={{ backgroundColor: '#424949', '&:hover': { backgroundColor: '#FF5733' } }} variant="contained">continue shopping</Button>
                        </div>
                        <div className='mt-6 w-1/2'>
                            <h1 className='text-2xl text-gray-700 font-semibold'>Coupon</h1>
                            <h1 className='text-lg text-gray-500 font-mormal'>Enter your coupon if you have one</h1>
                            <div class="relative w-full flex justify-center my-4">
                                <input type="text" id="simple-cupon" class="bg-gray-50 mr-4 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="coupon code" required />
                                <Button sx={{ backgroundColor: '#424949', '&:hover': { backgroundColor: '#FF5733' } }} variant="contained">Apply</Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end w-1/2 gap-4'>
                        <div className='flex items-center gap-8'>
                            <h1 className='text-xl text-gray-700 font-semibold uppercase'>Subtotal</h1>
                            <h1 className='text-md text-gray-700 font-semibold'>$ { }</h1>
                        </div>
                        <div className='flex items-center gap-8'>
                            <h1 className='text-2xl text-gray-700 font-bold uppercase'>Total</h1>
                            <h1 className='text-md text-gray-700 font-bold'>$ {9999}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;