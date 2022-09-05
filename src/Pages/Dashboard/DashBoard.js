import React from 'react';
import { AiOutlineMenuFold, AiOutlineMessage, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import { MdOutlineReviews } from 'react-icons/md';
import { TbBrandProducthunt } from 'react-icons/tb';
import { SiSimpleanalytics } from 'react-icons/si';
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
                <ul className="menu p-4 w-40 lg:w-72 bg-orange-500 font-semibold text-white gap-3">
                    {/* <!-- Sidebar content here --> */}
                    <h1 className='text-2xl font-semibold bg-zinc-200 text-gray-800 rounded-md text-center py-4'>Dashboard</h1>

                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='allProducts'><span className='text-2xl'><TbBrandProducthunt /></span> Products</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='addProduct'><span className='text-2xl'><BsPlusCircleDotted /></span>Add a product</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='orders'><span className='text-2xl'><ImCart /></span>Orders</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='myOrders'><span className='text-2xl'><AiOutlineUnorderedList /></span> My orders</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='message'><span className='text-2xl'><AiOutlineMessage /></span> Messages</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='myMessage'><span className='text-2xl'><AiOutlineMessage /></span>My messages</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='productReviews'><span className='text-2xl'><MdOutlineReviews /></span> Product reviews</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='myReviews'><span className='text-2xl'><MdOutlineReviews /></span> My reviews</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='users'><span className='text-2xl'><FaUsers /></span>Users</Link></li>
                    <li className='hover:text-gray-800 hover:bg-zinc-100 rounded-lg'><Link to='anualAnalysis'><span className='text-2xl'><SiSimpleanalytics /></span>Anual analysis</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;