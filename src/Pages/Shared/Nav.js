import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { BsCartPlusFill, BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import NavCartSingleItem from './NavCartSingleItem';
import './Nav.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Nav = ({ cart, subTotal }) => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <div className=' bg-white fixed mx-auto left-0 right-0 z-20 top-0 md:top-1'>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-8">
                <div className="flex flex-wrap justify-between items-center px-4 md:px-10 py-2.5 mx-auto">
                    <Link to='/' className="flex items-center">
                        <img src={logo} className="h-8 md:h-12 " alt="Automet logo" />
                    </Link>

                    {/* search........... */}

                    <form className="flex items-center w-1/2">
                        <label for="voice-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>

                            <input type="text" id="voice-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />

                            <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <button type="submit" className="inline-flex justify-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg border hover:bg-orange-600  dark:bg-blue-600 dark:hover:bg-blue-700">
                            <svg aria-hidden="true" className="mr-2 ml-1 w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 10 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </form>
                    <div className="flex items-center mt-6 lg:mt-0">
                        <Link to='/' className="flex flex-nowrap items-center mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline hover:text-red-600">Wishlist<span className='mx-1'><BsFillHeartFill /></span>({0})
                        </Link>
                        <div className="indicator ">
                            <span className="indicator-item badge badge-primary bg-orange-500 border-none">{cart.length}</span>
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-outline btn-circle text-2xl text-gray-600">< BsCartPlusFill /></label>
                                <ul tabIndex="0" className="dropdown-content cart-dropdown menu py-4 px-4 shadow bg-zinc-200 rounded">
                                    {
                                        cart.length === 0 ? <h1 className='text-center text-xl font-semibold  w-full mx-auto text-gray-600 my-6 '>Your cart is empty</h1> : cart?.map(item => <NavCartSingleItem
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
                                    {cart.length > 0 &&

                                        <div className='flex items-center justify-between mt-4 mb-4'>
                                            <button className='btn btn-sm btn-primary bg-orange-500 border-none'><Link to='/cart'>View Cart</Link></button>
                                            <button className='btn btn-sm btn-primary bg-orange-500 border-none'><Link to='/checkout'>Checkout</Link></button>
                                        </div>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
            <nav className=" dark:bg-gray-700">
                <div className="bg-gray-50 navbar pl-6 pr-8 mx-auto">
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-outline text-gray-500 lg:hidden ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded w-52 bg-gray-50">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/aboutMore'>About</Link></li>
                                <li tabIndex="0">
                                    <Link to='/shop' className="justify-between">
                                        Shop
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-50 w-40">
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
                                <li tabIndex="0">
                                    <Link to='/blogs' className="justify-between">
                                        Blogs
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-50 w-40">
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

                                <li tabIndex="0">
                                    <Link to='/features'>
                                        Features
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-50">
                                        <div className='grid grid-flow-col lg:grid-flow-row gap-2 mb-4'>
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
                                <li tabIndex="0">
                                    <Link to='/dashboard' className="justify-between">
                                        Dashboard
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-50 w-40">
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Products</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Add a product</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Users</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Orders</Link>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-start hidden lg:flex md:w-full">
                        <ul className="menu menu-horizontal p-0 font-bold text-gray-600 text-sm">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutMore'>About</Link></li>
                            <li tabIndex="0">
                                <Link to='/shop'>
                                    Shop
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded w-40 shadow-md">
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
                            <li tabIndex="0">
                                <Link to='/blogs'>
                                    Blog
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded w-40 shadow-md">
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
                            <li tabIndex="0">
                                <Link to='/features'>
                                    Features
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-gray-50 rounded shadow-md z-10 ">
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
                            {user &&
                                <li tabIndex="0">
                                    <Link to='/dashboard' className="justify-between">
                                        Dashboard
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-50 w-40">
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Products</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Add a product</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Users</Link>
                                        </div>
                                        <div className='my-2 hover:text-red-600 transition duration-0 hover:duration-100'>
                                            <Link to='/addProduct'>Orders</Link>
                                        </div>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>

                    {/* address */}
                    <div className="navbar-end">
                        <select className="select select-ghost border-none active:bg-none focus:outline-none max-w-xs">
                            <option disabled selected>Language</option>
                            <option>English</option>
                            <option>Francis</option>
                            <option>Germany</option>
                        </select>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-sm rounded text-xs m-1 flex-nowrap">Account<span className='text-md ml-2'> <AiOutlineDown /></span></label>
                            <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded">
                                <div className='grid items-center py-2 bg-gray-50'>
                                    <div className='px-4'>
                                        <div className='w-60 mb-2'>
                                            <h2>Welcome to <Link className='font-medium hover:underline hover:decoration-2' to='/'>Automed Machines</Link></h2>
                                        </div>
                                        {!user ? <Link to='/login'>
                                            <button className='btn btn-primary btn-wide btn-sm p-2 my-2 bg-orange-500 border-none'>Login</button>
                                        </Link> :
                                            <h1 className='text-2xl text-purple-500 font-semibold'>{user.displayName}</h1>
                                        }

                                    </div>
                                    <div className="divider m-1"></div>
                                    <div className=''>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Orders</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Message Center</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Payment</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>Wishlist</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Favourite Stories</Link></div>
                                        <div className='hover:bg-gray-200 px-4 py-1'><Link to='/'>My Cupons</Link></div>
                                    </div>
                                    {user && <Link onClick={logout} to='/signup'>
                                        <button className='btn btn-primary btn-wide btn-sm p-2 my-2 mx-4 bg-orange-500 border-none'>Log out</button>
                                    </Link>}
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