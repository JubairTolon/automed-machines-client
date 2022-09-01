import React from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { GrProductHunt } from 'react-icons/gr';
import { ImCart } from 'react-icons/im';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile mt-48 lg:mt-32">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-2 mx-8">
                <label for="my-drawer-2" className="btn btn-outline text-gray-500 lg:hidden ml-2 float-right text-2xl">
                    <AiOutlineMenuFold />
                </label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 lg:w-80 bg-orange-500 font-semibold text-white gap-3">
                    {/* <!-- Sidebar content here --> */}
                    <h1 className='text-2xl font-semibold bg-zinc-200 text-gray-800 rounded-md text-center py-4'>Dashboard</h1>

                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='myOrders'><span className='text-2xl'><GrProductHunt /></span> My orders</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='myReviews'><span className='text-2xl'><GrProductHunt /></span> My reviews</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='allProducts'><span className='text-2xl'><GrProductHunt /></span> Products</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='productReviews'><span className='text-2xl'><GrProductHunt /></span> Product reviews</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='addProduct'><span className='text-2xl'><BsPlusCircleFill /></span>Add a product</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='users'><span className='text-2xl'><FaUsers /></span>Users</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='orders'><span className='text-2xl'><ImCart /></span>Orders</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='anualAnalysis'><span className='text-2xl'><ImCart /></span>Anual analysis</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;