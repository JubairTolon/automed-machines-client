import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { BsCartPlusFill, BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import NavCartSingleItem from './NavCartSingleItem';

const Nav = ({ cart, subTotal }) => {

    return (
        <div className=' bg-white fixed mx-auto left-0 right-0 z-20 top-0 md:top-1'>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 mt-8">
                <div class="flex flex-wrap justify-between items-center px-4 md:px-10 py-2.5 mx-auto">
                    <Link to='/' class="flex items-center">
                        <img src={logo} class="h-8 md:h-12 " alt="Automet logo" />
                    </Link>

                    {/* search........... */}

                    <form class="flex items-center w-1/2">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>

                            <input type="text" id="voice-search" class="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />

                            <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                                <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <button type="submit" class="inline-flex justify-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg border hover:bg-orange-600  dark:bg-blue-600 dark:hover:bg-blue-700">
                            <svg aria-hidden="true" class="mr-2 ml-1 w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 10 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </form>
                    <div class="flex items-center mt-6 lg:mt-0">
                        <Link to='/' class="flex flex-nowrap items-center mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline hover:text-red-600">Wishlist<span className='mx-1'><BsFillHeartFill /></span>({0})
                        </Link>
                        <div class="indicator ">
                            <span class="indicator-item badge badge-primary bg-orange-500 border-none">{cart.length}</span>
                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-outline btn-circle text-2xl text-gray-600">< BsCartPlusFill /></label>
                                <ul tabindex="0" class="dropdown-content menu py-4 px-4 shadow overflow-hidden bg-zinc-200 rounded">
                                    {
                                        cart?.map(item => <NavCartSingleItem
                                            key={item._id}
                                            item={item}
                                        ></NavCartSingleItem>)
                                    }
                                    <div className='flex gap-8 items-center px-2 justify-between mt-8 mb-4'>
                                        <div className='font-bold'>
                                            <h2>Subtotal</h2>
                                        </div>
                                        <div className='font-bold'>
                                            <h2>$ {subTotal}</h2>
                                        </div>
                                    </div>
                                    <div className='flex gap-8 items-center justify-between mt-4 mb-4'>
                                        <div className='font-bold'>
                                            <button className='btn btn-sm btn-primary bg-orange-500 border-none'><Link to='/cart'>View Cart</Link></button>
                                        </div>
                                        <div className='font-bold'>
                                            <button className='btn btn-sm btn-primary bg-orange-500 border-none'><Link to='/checkout'>Checkout</Link></button>
                                        </div>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
            <nav class=" dark:bg-gray-700">
                <div class="bg-gray-50 navbar pl-6 pr-8 mx-auto">
                    <div class="navbar-start lg:hidden">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-outline text-gray-500 lg:hidden ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded w-52 bg-gray-50">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/aboutMore'>About</Link></li>
                                <li tabindex="0">
                                    <Link to='/shop' class="justify-between">
                                        Shop
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul class="p-2 bg-gray-50 w-40">
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/shop'>Shop</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/shop'>Shop list</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/productDetails'>Product details</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/checkout'>Checkout</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/cart'>Cart</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/wishlist'>Wishlist</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/account'>My account</Link>
                                        </div>
                                    </ul>
                                </li>
                                <li tabindex="0">
                                    <Link to='/blogs' class="justify-between">
                                        Blogs
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul class="p-2 bg-gray-50 w-40">
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/shop'>Blog</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/shop'>Blog details</Link>
                                        </div>
                                    </ul>
                                </li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/reviewsMain'>Reviews</Link></li>
                                <li tabindex="0">
                                    <Link to='/features'>
                                        Features
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul class="p-2 bg-gray-50">
                                        <div className='grid grid-flow-row gap-2 mb-4'>
                                            <div className='w-40'>
                                                <h2 className='mb-8 mt-4 text-xl'>Column-1</h2>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/shop'>Shop</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/checkout'>Checkout</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/cart'>Cart</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/wishlist'>Wishlist</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/account'>My account</Link>
                                                </div>
                                            </div>
                                            <div className='w-40'>
                                                <h2 className='mb-8 mt-4 text-xl'>Column-2</h2>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/shop'>Shop</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/checkout'>Checkout</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/cart'>Cart</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/wishlist'>Wishlist</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/account'>My account</Link>
                                                </div>
                                            </div>
                                            <div className='w-40'>
                                                <h2 className='mb-8 mt-4 text-xl '>Column-3</h2>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/shop'>Shop</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/checkout'>Checkout</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/cart'>Cart</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/wishlist'>Wishlist</Link>
                                                </div>
                                                <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                                    <Link to='/account'>My account</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-start hidden lg:flex md:w-full">
                        <ul class="menu menu-horizontal p-0 font-bold text-gray-600 text-sm">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutMore'>About</Link></li>
                            <li tabindex="0">
                                <Link to='/shop'>
                                    Shop
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-gray-50 rounded w-40 shadow-md">
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/shop'>Shop</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/shop'>Shop list</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/productDetails'>Product details</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/checkout'>Checkout</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/cart'>Cart</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/wishlist'>Wishlist</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/account'>My account</Link>
                                    </div>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <Link to='/blogs'>
                                    Blog
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-gray-50 rounded w-40 shadow-md">
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/blog'>Blog</Link>
                                    </div>
                                    <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                        <Link to='/blog'>Blog details</Link>
                                    </div>
                                </ul>
                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/reviewsMain'>Reviews</Link></li>
                            <li tabindex="0">
                                <Link to='/features'>
                                    Features
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-gray-50 rounded shadow-md z-10 ">
                                    <div className='grid grid-flow-col gap-8 mb-4'>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl'>Shops</h2>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/account'>My account</Link>
                                            </div>
                                        </div>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl'>Cart</h2>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/account'>My account</Link>
                                            </div>
                                        </div>
                                        <div className='w-40'>
                                            <h2 className='mb-8 mt-4 text-xl '>About</h2>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/shop'>Shop</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/checkout'>Checkout</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/cart'>Cart</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/wishlist'>Wishlist</Link>
                                            </div>
                                            <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100 font-medium'>
                                                <Link to='/account'>My account</Link>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* address */}
                    <div class="navbar-end">
                        <select class="select select-ghost border-none active:bg-none focus:outline-none max-w-xs">
                            <option disabled selected>Language</option>
                            <option>English</option>
                            <option>Francis</option>
                            <option>Germany</option>
                        </select>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-sm rounded text-xs m-1 flex-nowrap">Account<span className='text-md ml-2'> <AiOutlineDown /></span></label>
                            <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded">
                                <div className='grid items-center py-2 bg-gray-50'>
                                    <div className='px-4'>
                                        <div className='w-60 mb-2'>
                                            <h2>Welcome to <Link className='font-medium hover:underline hover:decoration-2' to='/'>Automed Machines</Link></h2>
                                        </div>
                                        <button className='btn btn-primary btn-wide btn-sm p-2 my-2 bg-orange-500 border-none'><Link to='/login'>Login</Link></button>
                                    </div>
                                    <div class="divider m-1"></div>
                                    <div className=''>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Orders</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Message Center</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Payment</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Wishlist</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Favourite Stories</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Cupons</Link></div>
                                    </div>
                                    <button className='btn btn-primary btn-wide btn-sm p-2 my-2 mx-4 bg-orange-500 border-none'><Link to='/login'>Sign Out</Link></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Nav; <h2>This is nav bar</h2>